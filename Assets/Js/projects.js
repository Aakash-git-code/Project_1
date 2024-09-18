
  const projectsPerPage = 3; // Number of projects per page
  const totalProjects = 9; // Total number of projects
  let currentPage = 1; // Start on the first page
  
  // Function to update the project display based on the current page
  function updateProjectDisplay() {
      const projects = document.querySelectorAll('.project_card_body');
      projects.forEach((project, index) => {
          if (index >= (currentPage - 1) * projectsPerPage && index < currentPage * projectsPerPage) {
              project.style.display = 'block';
          } else {
              project.style.display = 'none';
          }
      });
  
      // Update page number
      document.getElementById('page-number').innerHTML = `${currentPage < 10 ? '0' : ''}${currentPage} <span>/</span> ${Math.ceil(totalProjects / projectsPerPage) < 10 ? '0' : ''}${Math.ceil(totalProjects / projectsPerPage)}`;
  
      // Enable/disable buttons
      document.getElementById('prev-btn').disabled = currentPage === 1;
      document.getElementById('next-btn').disabled = currentPage === Math.ceil(totalProjects / projectsPerPage);
  }
  
  // Function to go to the previous page
  function goToPreviousPage() {
      if (currentPage > 1) {
          currentPage--;
          updateProjectDisplay();
      }
  }
  
  // Function to go to the next page
  function goToNextPage() {
      if (currentPage < Math.ceil(totalProjects / projectsPerPage)) {
          currentPage++;
          updateProjectDisplay();
      }
  }
  
  // Add event listeners to buttons
  document.getElementById('prev-btn').addEventListener('click', goToPreviousPage);
  document.getElementById('next-btn').addEventListener('click', goToNextPage);
  
  // Initial display setup
  updateProjectDisplay();
  