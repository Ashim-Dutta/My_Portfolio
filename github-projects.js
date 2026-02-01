/**
 * GitHub Projects Manager
 * Fetches and displays top 20 repositories from GitHub API with caching and error handling
 */

class GitHubProjectsManager {
  constructor() {
    this.cache = { data: null, timestamp: null };
    this.cacheExpiry = 5 * 60 * 1000; // 5 minutes
    this.apiEndpoint = 'https://api.github.com/users/Ashim-Dutta/repos?sort=stars&order=desc&per_page=20';
  }

  /**
   * Maps programming language to brand color
   */
  getLanguageColor(language) {
    const colors = {
      'JavaScript': '#f7df1e',
      'TypeScript': '#3178c6',
      'Python': '#3776ab',
      'Java': '#007396',
      'Go': '#00add8',
      'Rust': '#ce422b',
      'PHP': '#777bb4',
      'Ruby': '#cc342d',
      'C++': '#00599c',
      'C#': '#239120',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'SCSS': '#c6538c',
      'Vue': '#4fc08d',
      'Angular': '#dd0031',
      'Node.js': '#68a063',
      'Express': '#000000',
      'MongoDB': '#001e2e',
      'MySQL': '#00758f',
      'C': '#a8b9cc',
    };
    return colors[language] || '#baa876';
  }

  /**
   * Formats date to human-readable relative time
   */
  formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 30) return `${diffDays}d ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}m ago`;
    return `${Math.floor(diffDays / 365)}y ago`;
  }

  /**
   * Fetches repositories from GitHub API with caching
   */
  async fetchFromGitHub() {
    try {
      // Check cache first
      if (this.cache.data && Date.now() - this.cache.timestamp < this.cacheExpiry) {
        console.log('✓ Using cached GitHub data');
        return this.cache.data;
      }

      console.log('↓ Fetching from GitHub API...');
      const response = await fetch(this.apiEndpoint, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      });

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('API rate limit exceeded. Please try again later.');
        }
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const repos = await response.json();

      // Filter: exclude archived repos
      const filtered = repos.filter(repo => !repo.archived);

      // Cache the data
      this.cache = { data: filtered, timestamp: Date.now() };

      return filtered;
    } catch (error) {
      console.error('✗ Error fetching GitHub projects:', error);
      throw error;
    }
  }

  /**
   * Renders individual project cards
   */
  renderProjectCards(repos) {
    return repos.slice(0, 20).map(repo => {
      const language = repo.language || 'Unknown';
      const stars = repo.stargazers_count || 0;
      const forks = repo.forks_count || 0;
      const lastUpdated = this.formatDate(repo.updated_at);
      const coverImage = `https://opengraph.githubassets.com/1/${repo.full_name}`;
      const languageColor = this.getLanguageColor(language);
      const badge = stars > 10 ? '⭐ Top Repo' : '📦 Project';

      return `
        <article class="card" role="article">
          <a class="card-link" 
             href="${repo.html_url}" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="View ${repo.name} repository on GitHub">
            <div class="thumb">
              <img 
                src="${coverImage}" 
                alt="Repository preview for ${repo.name}" 
                loading="lazy"
                decoding="async"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" 
              />
              <div class="repo-fallback" style="display:none; background: linear-gradient(135deg, ${languageColor} 0%, rgba(186,168,118,0.3) 100%);">
                <i class="ri-git-repository-line" aria-hidden="true"></i>
              </div>
            </div>
            <div class="card-body">
              <h3>${repo.name.replace(/-/g, ' ')}</h3>
              <p class="description" title="${repo.description || 'No description'}">${(repo.description || 'No description provided').substring(0, 120)}${repo.description && repo.description.length > 120 ? '...' : ''}</p>
              <div class="meta">
                <div class="tags">
                  <span class="tag language-tag" title="Primary language">${language}</span>
                  <span class="tag" title="Stars">⭐ ${stars}</span>
                  <span class="tag" title="Forks">🔀 ${forks}</span>
                  <span class="tag" title="Last updated">${lastUpdated}</span>
                </div>
                <div class="actions">
                  <span class="badge">${badge}</span>
                </div>
              </div>
            </div>
          </a>
        </article>
      `;
    }).join('');
  }

  /**
   * Initializes the project manager and renders projects
   */
  async init() {
    const container = document.getElementById('projects-container');
    const loadingEl = document.getElementById('loading');

    if (!container) {
      console.error('✗ Projects container not found');
      return;
    }

    try {
      const repos = await this.fetchFromGitHub();

      if (loadingEl) {
        loadingEl.remove();
      }

      if (repos.length === 0) {
        container.innerHTML = '<p class="no-projects">📭 No repositories found</p>';
        return;
      }

      container.innerHTML = this.renderProjectCards(repos);
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-label', 'GitHub projects grid');

      console.log(`✓ Successfully loaded ${repos.length} projects`);
    } catch (error) {
      if (loadingEl) {
        loadingEl.innerHTML = `
          <div class="error-state">
            <i class="ri-error-warning-line"></i>
            <p>Unable to load projects</p>
            <small>${error.message}</small>
            <button class="retry-btn" onclick="githubManager.init()" aria-label="Retry loading projects">
              <i class="ri-refresh-line"></i> Retry
            </button>
          </div>
        `;
        loadingEl.className = 'error';
      }
    }
  }
}

// Initialize on DOM ready
const githubManager = new GitHubProjectsManager();
document.addEventListener('DOMContentLoaded', () => {
  githubManager.init();
});
