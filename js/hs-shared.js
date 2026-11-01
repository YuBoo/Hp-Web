/* Shared sidebar toggle & common interactions */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('active');
}

// Close sidebar on overlay click
document.addEventListener('DOMContentLoaded', function() {
  var overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', toggleSidebar);
  }

  // Filter chips
  document.querySelectorAll('.filter-chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      this.parentElement.querySelectorAll('.filter-chip').forEach(function(c) { c.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  // Tabs
  document.querySelectorAll('[data-tab-group]').forEach(function(group) {
    var tabs = group.querySelectorAll('[data-tab]');
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        tabs.forEach(function(t) { t.classList.remove('active'); });
        this.classList.add('active');
        var target = this.getAttribute('data-tab');
        var panels = document.querySelectorAll('[data-tab-panel="' + target + '"]');
        document.querySelectorAll('[data-tab-panel]').forEach(function(p) { p.style.display = 'none'; });
        panels.forEach(function(p) { p.style.display = ''; });
      });
    });
  });
});
