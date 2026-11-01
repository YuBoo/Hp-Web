/* Shared sidebar HTML — injected by renderSidebar(activeId)
 * 农机监管平台 · 作业查询子页侧栏（与农机平台 machine-platform.html 菜单一致）。
 * 渲染骨架沿用 HS-WEB（与 css/hs-shared.css 的 .sidebar 组件配套）。
 */
(function() {
  'use strict';

  var GROUPS = [
    {
      id: 'home',
      label: '工作台',
      icon: '<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>',
      href: 'machine-platform.html',
      isHome: true
    },
    {
      id: 'machine',
      label: '农机监管',
      color: '#7B1FA2',
      items: [
        { id: 'monitor', label: '实时监控', href: 'machine-platform.html', icon: '<path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm3 1a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1H5z"/>' },
        { id: 'stat', label: '作业统计', href: 'machine-platform.html', icon: '<path d="M3 3v18h18"/><path d="M7 14l3-4 3 3 4-6"/>' },
        { id: 'track', label: '历史轨迹', href: 'machine-platform.html', icon: '<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>' },
        { id: 'op', label: '作业查询', href: 'operation-query.html', icon: '<path d="M3 5a2 2 0 012-2h7a2 2 0 012 2v1h2.382a2 2 0 011.789 1.106l1.618 3.236A2 2 0 0120 10.236V14a2 2 0 01-2 2h-1a3 3 0 11-6 0H9a3 3 0 11-6 0H4a1 1 0 01-1-1V5zm12 11a1 1 0 100-2 1 1 0 000 2zM6 16a1 1 0 100-2 1 1 0 000 2z"/>' },
      ]
    }
  ];

  var chevronSVG = '<svg class="chevron" viewBox="0 0 16 16" fill="currentColor"><path d="M5.646 3.146a.5.5 0 01.708 0L10.5 7.293a.5.5 0 010 .707l-4.146 4.146a.5.5 0 01-.708-.707L9.293 7.646 5.646 3.854a.5.5 0 010-.708z"/></svg>';

  function getActiveGroup(activeId) {
    for (var i = 0; i < GROUPS.length; i++) {
      var g = GROUPS[i];
      if (g.isHome && activeId === 'index') return g.id;
      if (g.items) {
        for (var j = 0; j < g.items.length; j++) {
          if (g.items[j].id === activeId) return g.id;
        }
      }
    }
    return null;
  }

  var NAV_KEY = 'op_nav_collapsed';
  function readCollapsed() {
    try { var raw = localStorage.getItem(NAV_KEY); return raw ? JSON.parse(raw) : []; }
    catch (e) { return []; }
  }
  function writeCollapsed(arr) {
    try { localStorage.setItem(NAV_KEY, JSON.stringify(arr)); } catch (e) {}
  }

  window.renderSidebar = function(activeId) {
    var sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    var activeGroup = getActiveGroup(activeId);
    var collapsed = readCollapsed();
    if (activeGroup) { var ai = collapsed.indexOf(activeGroup); if (ai >= 0) collapsed.splice(ai, 1); }
    writeCollapsed(collapsed);
    var html = '';

    // Brand — 农机监管平台
    html += '<div class="sidebar-brand">';
    html += '<div class="sidebar-brand-icon" style="background:#7B1FA2;color:#fff"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M3 17h18M5 17V9l4-3h6l4 3v8"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg></div>';
    html += '<div><div class="sidebar-brand-text">农机监管平台</div><div class="sidebar-brand-sub">Machinery · 北斗终端</div></div>';
    html += '</div>';

    html += '<nav class="sidebar-nav">';

    for (var i = 0; i < GROUPS.length; i++) {
      var g = GROUPS[i];

      if (g.isHome) {
        var isHomeActive = activeId === 'index';
        html += '<div class="nav-home">';
        html += '<a href="' + g.href + '" class="nav-item' + (isHomeActive ? ' active' : '') + '">';
        html += '<svg viewBox="0 0 20 20" fill="currentColor">' + g.icon + '</svg>';
        html += g.label + '</a></div>';
        continue;
      }

      var isExpanded = collapsed.indexOf(g.id) < 0;
      html += '<div class="nav-group' + (isExpanded ? '' : ' collapsed') + '" data-group="' + g.id + '">';
      html += '<div class="nav-group-header" onclick="toggleNavGroup(\'' + g.id + '\')">';
      html += '<span class="group-dot" style="background:' + g.color + ';"></span>';
      html += '<span class="group-label">' + g.label + '</span>';
      html += '<span class="group-count">' + g.items.length + '</span>';
      html += chevronSVG;
      html += '</div>';
      html += '<div class="nav-group-items">';

      for (var j = 0; j < g.items.length; j++) {
        var item = g.items[j];
        var isActive = item.id === activeId;
        html += '<a href="' + item.href + '" class="nav-item' + (isActive ? ' active' : '') + '">';
        html += '<svg viewBox="0 0 20 20" fill="currentColor">' + item.icon + '</svg>';
        html += item.label + '</a>';
      }

      html += '</div></div>';
    }

    html += '</nav>';

    html += '<div class="sidebar-footer">';
    html += '<div class="avatar">管</div>';
    html += '<div class="sidebar-footer-info"><div class="sidebar-footer-name">管理员</div><div class="sidebar-footer-role">农机监管</div></div>';
    html += '</div>';

    sidebar.innerHTML = html;
  };

  window.toggleNavGroup = function(groupId) {
    var group = document.querySelector('[data-group="' + groupId + '"]');
    var collapsed = readCollapsed();
    var idx = collapsed.indexOf(groupId);
    if (idx >= 0) { collapsed.splice(idx, 1); } else { collapsed.push(groupId); }
    writeCollapsed(collapsed);
    if (group) { group.classList.toggle('collapsed'); }
  };
})();
