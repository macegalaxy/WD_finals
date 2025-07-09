// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add smooth scrolling to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Menu tab functionality
function showMenu(category) {
    // Hide all menu contents
    document.querySelectorAll('.menu-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected menu content
    document.getElementById(category).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Simulate form submission
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('aos-animate');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Trigger animation on page load
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add hover effects for menu items
document.querySelectorAll('.menu-item, .featured-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click animation for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Add search functionality (placeholder)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search menu items...';
    searchInput.className = 'search-input';
    
    const menuSection = document.querySelector('.menu .container');
    const menuTabs = document.querySelector('.menu-tabs');
    
    if (menuSection && menuTabs) {
        menuSection.insertBefore(searchInput, menuTabs);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const menuItems = document.querySelectorAll('.menu-item');
            
            menuItems.forEach(item => {
                const itemName = item.querySelector('h4').textContent.toLowerCase();
                const itemDescription = item.querySelector('p').textContent.toLowerCase();
                
                if (itemName.includes(searchTerm) || itemDescription.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = searchTerm === '' ? 'block' : 'none';
                }
            });
        });
    }
}
// Enhanced search functionality with pop-up effects
function addSearchFunctionality() {
  const searchInput = document.createElement("input")
  searchInput.type = "text"
  searchInput.placeholder = '🔍 Search menu items... (try "chicken", "burger", "sweet")'
  searchInput.className = "search-input"
  searchInput.id = "menuSearch"

  // Create search results container
  const searchResults = document.createElement("div")
  searchResults.className = "search-results"
  searchResults.style.display = "none"

  // Create suggestions container
  const suggestionsContainer = document.createElement("div")
  suggestionsContainer.className = "search-suggestions"
  suggestionsContainer.innerHTML = `
        <h4>Popular searches:</h4>
        <div class="suggestion-tags">
            <span class="suggestion-tag" data-search="chicken">Chicken</span>
            <span class="suggestion-tag" data-search="burger">Burger</span>
            <span class="suggestion-tag" data-search="spaghetti">Spaghetti</span>
            <span class="suggestion-tag" data-search="sweet">Sweet</span>
            <span class="suggestion-tag" data-search="rice">Rice</span>
            <span class="suggestion-tag" data-search="dessert">Dessert</span>
        </div>
    `

  const menuSection = document.querySelector(".menu .container")
  const menuTabs = document.querySelector(".menu-tabs")

  if (menuSection && menuTabs) {
    menuSection.insertBefore(searchInput, menuTabs)
    menuSection.insertBefore(searchResults, menuTabs)
    menuSection.insertBefore(suggestionsContainer, menuTabs)

    // Add click handlers for suggestion tags
    suggestionsContainer.querySelectorAll(".suggestion-tag").forEach((tag) => {
      tag.addEventListener("click", function () {
        const searchTerm = this.dataset.search
        searchInput.value = searchTerm
        performSearch(searchTerm)
        searchInput.focus()
      })
    })

    // Enhanced search with debouncing
    let searchTimeout
    searchInput.addEventListener("input", function () {
      clearTimeout(searchTimeout)
      searchTimeout = setTimeout(() => {
        performSearch(this.value)
      }, 300)
    })

    // Clear search on escape key
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        this.value = ""
        performSearch("")
      }
    })
  }
}

function performSearch(searchTerm) {
  const menuItems = document.querySelectorAll(".menu-item")
  const searchResults = document.querySelector(".search-results")
  const suggestionsContainer = document.querySelector(".search-suggestions")
  const menuTabs = document.querySelector(".menu-tabs")

  // Clean search term
  searchTerm = searchTerm.toLowerCase().trim()

  if (searchTerm === "") {
    // Reset all items
    menuItems.forEach((item) => {
      item.style.display = "block"
      item.classList.remove("search-highlight", "search-hidden", "search-match")
      // Remove highlights
      const highlights = item.querySelectorAll(".highlight-text")
      highlights.forEach((highlight) => {
        highlight.outerHTML = highlight.innerHTML
      })
    })

    searchResults.style.display = "none"
    suggestionsContainer.style.display = "block"
    menuTabs.style.display = "flex"

    // Remove no-results message if exists
    const noResults = document.querySelector(".no-results")
    if (noResults) noResults.remove()

    return
  }

  // Hide suggestions and menu tabs during search
  suggestionsContainer.style.display = "none"
  menuTabs.style.display = "none"

  // Show all menu content during search
  document.querySelectorAll(".menu-content").forEach((content) => {
    content.classList.add("active")
  })

  let matchCount = 0
  const exactMatches = []
  const partialMatches = []

  menuItems.forEach((item, index) => {
    const itemName = item.querySelector("h4").textContent.toLowerCase()
    const itemDescription = item.querySelector("p").textContent.toLowerCase()

    // Remove existing highlights
    const highlights = item.querySelectorAll(".highlight-text")
    highlights.forEach((highlight) => {
      highlight.outerHTML = highlight.innerHTML
    })

    // Check for matches
    const nameMatch = itemName.includes(searchTerm)
    const descMatch = itemDescription.includes(searchTerm)
    const exactNameMatch = itemName === searchTerm

    if (nameMatch || descMatch) {
      matchCount++
      item.style.display = "block"
      item.classList.remove("search-hidden")

      // Highlight matching text
      if (nameMatch) {
        const nameElement = item.querySelector("h4")
        nameElement.innerHTML = highlightText(nameElement.textContent, searchTerm)
      }
      if (descMatch) {
        const descElement = item.querySelector("p")
        descElement.innerHTML = highlightText(descElement.textContent, searchTerm)
      }

      // Categorize matches
      if (exactNameMatch) {
        exactMatches.push({ item, index })
      } else {
        partialMatches.push({ item, index })
      }
    } else {
      item.style.display = "block"
      item.classList.add("search-hidden")
    }
  })

  // Apply special effects to matches
  setTimeout(() => {
    // Exact matches get highlight effect
    exactMatches.forEach(({ item }, i) => {
      setTimeout(() => {
        item.classList.add("search-highlight")
        item.scrollIntoView({ behavior: "smooth", block: "center" })
      }, i * 100)
    })

    // Partial matches get match effect
    partialMatches.forEach(({ item }, i) => {
      setTimeout(
        () => {
          item.classList.add("search-match")
        },
        exactMatches.length * 100 + i * 50,
      )
    })
  }, 100)

  // Update search results
  updateSearchResults(searchTerm, matchCount)
}

function highlightText(text, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, "gi")
  return text.replace(regex, '<span class="highlight-text">$1</span>')
}

function updateSearchResults(searchTerm, matchCount) {
  const searchResults = document.querySelector(".search-results")

  if (matchCount === 0) {
    // Show no results message
    showNoResults(searchTerm)
    searchResults.style.display = "none"
  } else {
    // Remove no-results message if exists
    const noResults = document.querySelector(".no-results")
    if (noResults) noResults.remove()

    searchResults.innerHTML = `
            <div class="search-results-text">
                Found ${matchCount} item${matchCount !== 1 ? "s" : ""} matching "${searchTerm}"
            </div>
            <button class="clear-search" onclick="clearSearch()">
                <i class="fas fa-times"></i> Clear Search
            </button>
        `
    searchResults.style.display = "block"
  }
}

function showNoResults(searchTerm) {
  // Remove existing no-results message
  const existingNoResults = document.querySelector(".no-results")
  if (existingNoResults) existingNoResults.remove()

  const noResults = document.createElement("div")
  noResults.className = "no-results"
  noResults.innerHTML = `
        <i class="fas fa-search"></i>
        <h3>No items found for "${searchTerm}"</h3>
        <p>Try searching for "chicken", "burger", "spaghetti", or "dessert"</p>
        <button class="btn btn-primary" onclick="clearSearch()" style="margin-top: 1rem;">
            <i class="fas fa-arrow-left"></i> Back to Menu
        </button>
    `

  const menuSection = document.querySelector(".menu .container")
  const menuGrid = document.querySelector(".menu-content.active .menu-grid")
  if (menuGrid) {
    menuGrid.appendChild(noResults)
  }
}

function clearSearch() {
  const searchInput = document.getElementById("menuSearch")
  if (searchInput) {
    searchInput.value = ""
    performSearch("")
    searchInput.focus()
  }
}

// Add keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault()
    const searchInput = document.getElementById("menuSearch")
    if (searchInput) {
      searchInput.focus()
      searchInput.select()
    }
  }
})

// Initialize search functionality
document.addEventListener('DOMContentLoaded', addSearchFunctionality);