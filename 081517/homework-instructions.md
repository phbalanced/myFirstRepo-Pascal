<!DOCTYPE html>
<html class="" lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md · master · SMU-Coding-Bootcamp / 07-17-2017-SMU-Dallas-Class-Repository-FSF" property="og:title">
<meta content="GitLab Community Edition" property="og:description">
<meta content="http://smu.bootcampcontent.com/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="og:image">
<meta content="http://smu.bootcampcontent.com/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/blob/master/01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md · master · SMU-Coding-Bootcamp / 07-17-2017-SMU-Dallas-Class-Repository-FSF" property="twitter:title">
<meta content="GitLab Community Edition" property="twitter:description">
<meta content="http://smu.bootcampcontent.com/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="twitter:image">

<title>01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md · master · SMU-Coding-Bootcamp / 07-17-2017-SMU-Dallas-Class-Repository-FSF · GitLab</title>
<meta content="GitLab Community Edition" name="description">
<link rel="shortcut icon" type="image/x-icon" href="/assets/favicon-075eba76312e8421991a0c1f89a89ee81678bcde72319dd3e8047e2a47cd3a42.ico" />
<link rel="stylesheet" media="all" href="/assets/application-827e88c62e7e628af2464ce3a012b6c548402fddd4e70553471baaabd5939468.css" />
<link rel="stylesheet" media="print" href="/assets/print-9c3a1eb4a2f45c9f3d7dd4de03f14c2e6b921e757168b595d7f161bbc320fc05.css" />
<script src="/assets/webpack/application-50ce6eec3c322dd32573-v2.js"></script>
<script>
  window.project_uploads_path = "/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/uploads";
  window.preview_markdown_path = "/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/preview_markdown";
</script>

<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="c2N1nkqJ7uYvE2L3xIB/p6XEB78cbPmUtN1202XTJKMHFpVQv9bpw7cdNgNUNRx2f0kdpB/n8BSdccXO2n0XOw==" />
<meta content="origin-when-cross-origin" name="referrer">
<meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
<meta content="#474D57" name="theme-color">
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-5a9cee0e8a51212e70b90c87c12f382c428870c0ff67d1eb034d884b78d2dae7.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-a6eec6aeb9da138e507593b464fdac213047e49d3093fc30e90d9a995df83ba3.png" sizes="76x76" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-retina-72e2aadf86513a56e050e7f0f2355deaa19cc17ed97bbe5147847f2748e5a3e3.png" sizes="120x120" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-retina-8ebe416f5313483d9c1bc772b5bbe03ecad52a54eba443e5215a22caed2a16a2.png" sizes="152x152" />
<link color="rgb(226, 67, 41)" href="/assets/logo-d36b5212042cebc89b96df4bf6ac24e43db316143e89926c0db839ff694d2de4.svg" rel="mask-icon">
<meta content="/assets/msapplication-tile-1196ec67452f618d39cdd85e2e3a542f76574c071051ae7effbfde01710eb17d.png" name="msapplication-TileImage">
<meta content="#30353E" name="msapplication-TileColor">




</head>

<body class="ui_charcoal" data-group="" data-page="projects:blob:show" data-project="07-17-2017-SMU-Dallas-Class-Repository-FSF">
<script>
//<![CDATA[
window.gon={};gon.api_version="v3";gon.default_avatar_url="http:\/\/smu.bootcampcontent.com\/assets\/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png";gon.max_file_size=10;gon.relative_url_root="";gon.shortcuts_path="\/help\/shortcuts";gon.user_color_scheme="white";gon.award_menu_url="\/emojis";gon.katex_css_url="\/assets\/katex-e46cafe9c3fa73920a7c2c063ee8bb0613e0cf85fd96a3aea25f8419c4bfcfba.css";gon.katex_js_url="\/assets\/katex-04bcf56379fcda0ee7c7a63f71d0fc15ffd2e014d017cd9d51fd6554dfccf40a.js";gon.current_user_id=111;gon.current_username="phbalanced";
//]]>
</script>
<header class="navbar navbar-fixed-top navbar-gitlab with-horizontal-nav">
<a class="sr-only gl-accessibility" href="#content-body" tabindex="1">Skip to content</a>
<div class="container-fluid">
<div class="header-content">
<button aria-label="Toggle global navigation" class="side-nav-toggle" type="button">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-bars"></i>
</button>
<button class="navbar-toggle" type="button">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-ellipsis-v"></i>
</button>
<div class="navbar-collapse collapse">
<ul class="nav navbar-nav">
<li class="hidden-sm hidden-xs">
<div class="has-location-badge search search-form">
<form class="navbar-form" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><div class="search-input-container">
<div class="location-badge">This project</div>
<div class="search-input-wrap">
<div class="dropdown" data-url="/search/autocomplete">
<input type="search" name="search" id="search" placeholder="Search" class="search-input dropdown-menu-toggle no-outline js-search-dashboard-options" spellcheck="false" tabindex="1" autocomplete="off" data-toggle="dropdown" data-issues-path="http://smu.bootcampcontent.com/dashboard/issues" data-mr-path="http://smu.bootcampcontent.com/dashboard/merge_requests" />
<div class="dropdown-menu dropdown-select">
<div class="dropdown-content"><ul>
<li>
<a class="is-focused dropdown-menu-empty-link">
Loading...
</a>
</li>
</ul>
</div><div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
<i class="search-icon"></i>
<i class="clear-icon js-clear-input"></i>
</div>
</div>
</div>
<input type="hidden" name="group_id" id="group_id" class="js-search-group-options" />
<input type="hidden" name="project_id" id="search_project_id" value="4" class="js-search-project-options" data-project-path="07-17-2017-SMU-Dallas-Class-Repository-FSF" data-name="07-17-2017-SMU-Dallas-Class-Repository-FSF" data-issues-path="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/issues" data-mr-path="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/merge_requests" />
<input type="hidden" name="search_code" id="search_code" value="true" />
<input type="hidden" name="repository_ref" id="repository_ref" value="master" />

<div class="search-autocomplete-opts hide" data-autocomplete-path="/search/autocomplete" data-autocomplete-project-id="4" data-autocomplete-project-ref="master"></div>
</form></div>

</li>
<li class="visible-sm visible-xs">
<a title="Search" aria-label="Search" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/search"><i class="fa fa-search"></i>
</a></li>
<li>
<a title="Todos" aria-label="Todos" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/dashboard/todos"><i class="fa fa-bell fa-fw"></i>
<span class="badge hidden todos-pending-count">
0
</span>
</a></li>
<li class="header-user dropdown">
<a class="header-user-dropdown-toggle" data-toggle="dropdown" href="/phbalanced"><img width="26" height="26" class="header-user-avatar" src="http://www.gravatar.com/avatar/e4fb4db3fae27ebf8fe3c216f7eb2e5b?s=52&amp;d=identicon" alt="E4fb4db3fae27ebf8fe3c216f7eb2e5b?s=52&amp;d=identicon" />
<i class="fa fa-caret-down"></i>
</a><div class="dropdown-menu-nav dropdown-menu-align-right">
<ul>
<li>
<a class="profile-link" aria-label="Profile" data-user="phbalanced" href="/phbalanced">Profile</a>
</li>
<li>
<a aria-label="Settings" href="/profile">Settings</a>
</li>
<li>
<a aria-label="Help" href="/help">Help</a>
</li>
<li class="divider"></li>
<li>
<a class="sign-out-link" aria-label="Sign out" rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a>
</li>
</ul>
</div>
</li>
</ul>
</div>
<h1 class="title"><span><a href="/SMU-Coding-Bootcamp">SMU-Coding-Bootcamp</a></span> / <a class="project-item-select-holder" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF">07-17-2017-SMU-Dallas-Class-Repository-FSF</a><button name="button" type="button" class="dropdown-toggle-caret js-projects-dropdown-toggle" aria-label="Toggle switch project dropdown" data-target=".js-dropdown-menu-projects" data-toggle="dropdown" data-order-by="last_activity_at"><i class="fa fa-chevron-down"></i></button></h1>
<div class="header-logo">
<a class="home" title="Dashboard" id="logo" href="/"><svg width="36" height="36" class="tanuki-logo">
  <path class="tanuki-shape tanuki-left-ear" fill="#e24329" d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"/>
  <path class="tanuki-shape tanuki-right-ear" fill="#e24329" d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"/>
  <path class="tanuki-shape tanuki-nose" fill="#e24329" d="M18,34.38 3,14 33,14 Z"/>
  <path class="tanuki-shape tanuki-left-eye" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z"/>
  <path class="tanuki-shape tanuki-right-eye" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z"/>
  <path class="tanuki-shape tanuki-left-cheek" fill="#fca326" d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"/>
  <path class="tanuki-shape tanuki-right-cheek" fill="#fca326" d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"/>
</svg>

</a></div>
<div class="js-dropdown-menu-projects">
<div class="dropdown-menu dropdown-select dropdown-menu-projects">
<div class="dropdown-title"><span>Go to a project</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i class="fa fa-times dropdown-menu-close-icon"></i></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field" placeholder="Search your projects" autocomplete="off" /><i class="fa fa-search dropdown-input-search"></i><i role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
</div>

</div>
</div>
</header>

<script>
  var findFileURL = "/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/find_file/master";
</script>

<div class="page-with-sidebar">
<div class="sidebar-wrapper nicescroll">
<div class="sidebar-action-buttons">
<div class="nav-header-btn toggle-nav-collapse" title="Open/Close">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-bars"></i>
</div>
<div class="nav-header-btn pin-nav-btn has-tooltip  js-nav-pin" data-container="body" data-placement="right" title="Pin Navigation">
<span class="sr-only">Toggle navigation pinning</span>
<i class="fa fa-fw fa-thumb-tack"></i>
</div>
</div>
<div class="nav-sidebar">
<ul class="nav">
<li class="active home"><a title="Projects" class="dashboard-shortcuts-projects" href="/dashboard/projects"><span>
Projects
</span>
</a></li><li class=""><a class="dashboard-shortcuts-activity" title="Activity" href="/dashboard/activity"><span>
Activity
</span>
</a></li><li class=""><a title="Groups" href="/dashboard/groups"><span>
Groups
</span>
</a></li><li class=""><a title="Milestones" href="/dashboard/milestones"><span>
Milestones
</span>
</a></li><li class=""><a title="Issues" class="dashboard-shortcuts-issues" href="/dashboard/issues?assignee_id=111"><span>
Issues
<span class="count">0</span>
</span>
</a></li><li class=""><a title="Merge Requests" class="dashboard-shortcuts-merge_requests" href="/dashboard/merge_requests?assignee_id=111"><span>
Merge Requests
<span class="count">0</span>
</span>
</a></li><li class=""><a title="Snippets" href="/dashboard/snippets"><span>
Snippets
</span>
</a></li><a title="About GitLab CE" class="about-gitlab" href="/help"><span>
About GitLab CE
</span>
</a></ul>
</div>

</div>
<div class="layout-nav">
<div class="container-fluid">
<div class="controls">
<div class="dropdown project-settings-dropdown">
<a class="dropdown-new btn btn-default" data-toggle="dropdown" href="#" id="project-settings-button">
<i class="fa fa-cog"></i>
<i class="fa fa-caret-down"></i>
</a>
<ul class="dropdown-menu dropdown-menu-align-right">
<li class=""><a title="Members" class="team-tab tab" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/settings/members"><span>
Members
</span>
</a></li>
</ul>
</div>
</div>
<div class="nav-control scrolling-tabs-container">
<div class="fade-left">
<i class="fa fa-angle-left"></i>
</div>
<div class="fade-right">
<i class="fa fa-angle-right"></i>
</div>
<ul class="nav-links scrolling-tabs">
<li class="home"><a title="Project" class="shortcuts-project" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF"><span>
Project
</span>
</a></li><li class=""><a title="Activity" class="shortcuts-project-activity" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/activity"><span>
Activity
</span>
</a></li><li class="active"><a title="Repository" class="shortcuts-tree" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/tree/master"><span>
Repository
</span>
</a></li><li class=""><a title="Pipelines" class="shortcuts-pipelines" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/pipelines"><span>
Pipelines
</span>
</a></li><li class=""><a title="Graphs" class="shortcuts-graphs" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/graphs/master"><span>
Graphs
</span>
</a></li><li class=""><a title="Issues" class="shortcuts-issues" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/issues"><span>
Issues
<span class="badge count issue_counter">0</span>
</span>
</a></li><li class=""><a title="Merge Requests" class="shortcuts-merge_requests" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/merge_requests"><span>
Merge Requests
<span class="badge count merge_counter">0</span>
</span>
</a></li><li class=""><a title="Wiki" class="shortcuts-wiki" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/wikis/home"><span>
Wiki
</span>
</a></li><li class="hidden">
<a title="Network" class="shortcuts-network" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/network/master">Network
</a></li>
<li class="hidden">
<a class="shortcuts-new-issue" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/issues/new">Create a new issue
</a></li>
<li class="hidden">
<a title="Jobs" class="shortcuts-builds" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/builds">Jobs
</a></li>
<li class="hidden">
<a title="Commits" class="shortcuts-commits" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/commits/master">Commits
</a></li>
<li class="hidden">
<a title="Issue Boards" class="shortcuts-issue-boards" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/boards">Issue Boards</a>
</li>
</ul>
</div>

</div>
</div>
<div class="content-wrapper page-with-layout-nav">
<div class="scrolling-tabs-container sub-nav-scroll">
<div class="fade-left">
<i class="fa fa-angle-left"></i>
</div>
<div class="fade-right">
<i class="fa fa-angle-right"></i>
</div>

<div class="nav-links sub-nav scrolling-tabs">
<ul class="container-fluid container-limited">
<li class="active"><a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/tree/master">Files
</a></li><li class=""><a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/commits/master">Commits
</a></li><li class=""><a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/network/master">Network
</a></li><li class=""><a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/compare?from=master&amp;to=master">Compare
</a></li><li class=""><a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/branches">Branches
</a></li><li class=""><a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/tags">Tags
</a></li></ul>
</div>
</div>

<div class="alert-wrapper">


<div class="flash-container flash-container-page">
</div>


</div>
<div class=" ">
<div class="content" id="content-body">

<div class="container-fluid container-limited">

<div class="tree-holder" id="tree-holder">
<div class="nav-block">
<div class="tree-ref-holder">
<form class="project-refs-form" action="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/refs/switch" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="destination" id="destination" value="blob" />
<input type="hidden" name="path" id="path" value="01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md" />
<div class="dropdown">
<button class="dropdown-menu-toggle js-project-refs-dropdown" type="button" data-toggle="dropdown" data-selected="master" data-ref="master" data-refs-url="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/refs" data-field-name="ref" data-submit-form-on-click="true"><span class="dropdown-toggle-text ">master</span><i class="fa fa-chevron-down"></i></button>
<div class="dropdown-menu dropdown-menu-selectable">
<div class="dropdown-title"><span>Switch branch/tag</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i class="fa fa-times dropdown-menu-close-icon"></i></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field" placeholder="Search branches and tags" autocomplete="off" /><i class="fa fa-search dropdown-input-search"></i><i role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
</div>
</form>
</div>
<ul class="breadcrumb repo-breadcrumb">
<li>
<a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/tree/master">07-17-2017-SMU-Dallas-Class-Repository-FSF
</a></li>
<li>
<a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/tree/master/01-Class-Content">01-Class-Content</a>
</li>
<li>
<a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/tree/master/01-Class-Content/03-javascript">03-javascript</a>
</li>
<li>
<a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/tree/master/01-Class-Content/03-javascript/02-Homework">02-Homework</a>
</li>
<li>
<a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/tree/master/01-Class-Content/03-javascript/02-Homework/Instructions">Instructions</a>
</li>
<li>
<a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/blob/master/01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md"><strong>
homework-instructions.md
</strong>
</a></li>
</ul>
</div>
<ul class="blob-commit-info table-list hidden-xs">
<li class="commit table-list-row js-toggle-container" id="commit-3415cf3d">
<div class="table-list-cell avatar-cell hidden-xs">
<a href="/joeyferris"><img class="avatar has-tooltip s36 hidden-xs" alt="Joey Ferris&#39;s avatar" title="Joey Ferris" data-container="body" src="http://www.gravatar.com/avatar/59c2a5aeb36858c4be47af66b5b1b3dd?s=72&amp;d=identicon" /></a>
</div>
<div class="table-list-cell commit-content">
<a class="commit-row-message item-title" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/commit/3415cf3d2805409ce41893de01796a7428919670">Adding Week 03 activities and homework 03</a>
<span class="commit-row-message visible-xs-inline">
&middot;
3415cf3d
</span>
<div class="commiter">
<a class="commit-author-link has-tooltip" title="joey@joeyferris.io" href="/joeyferris">Joey Ferris</a>
committed
<time class="js-timeago" title="Jul 31, 2017 11:39pm" datetime="2017-07-31T23:39:19Z" data-toggle="tooltip" data-placement="top" data-container="body">2017-07-31 18:39:19 -0500</time>
</div>
</div>
<div class="table-list-cell commit-actions hidden-xs">
<button class="btn btn-clipboard btn-transparent" data-toggle="tooltip" data-placement="bottom" data-container="body" data-clipboard-text="3415cf3d2805409ce41893de01796a7428919670" data-title="Copy commit SHA to clipboard" type="button" title="Copy commit SHA to clipboard"><i class="fa fa-clipboard"></i></button>
<a class="commit-short-id btn btn-transparent" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/commit/3415cf3d2805409ce41893de01796a7428919670">3415cf3d</a>

</div>
</li>

</ul>
<div class="blob-content-holder" id="blob-content-holder">
<article class="file-holder">
<div class="file-title">
<i class="fa fa-file-text-o fa-fw"></i>
<strong>
homework-instructions.md
</strong>
<small>
7.16 KB
</small>
<div class="file-actions hidden-xs">
<div class="btn-group">

</div>
<div class="btn-group tree-btn-group">
<a class="btn btn-sm" target="_blank" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/raw/master/01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md">Raw</a>
<a class="btn btn-sm" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/blame/master/01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md">Blame</a>
<a class="btn btn-sm" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/commits/master/01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md">History</a>
<a class="btn btn-sm js-data-file-blob-permalink-url" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/blob/e3a8d33995c0ea4ec4a0957942a7192d261f809e/01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md">Permalink</a>
</div>
<div class="btn-group" role="group">
<a class="btn btn-sm" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/edit/master/01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md">Edit</a>
<button name="button" type="submit" class="btn btn-default" data-target="#modal-upload-blob" data-toggle="modal">Replace</button>
<button name="button" type="submit" class="btn btn-remove" data-target="#modal-remove-blob" data-toggle="modal">Delete</button>
</div>

</div>
</div>
<div class="file-content wiki">
<h1 dir="auto">&#x000A;<a id="user-content-javascript-assignment" class="anchor" href="#javascript-assignment" aria-hidden="true"></a>JavaScript Assignment</h1>&#x000A;&#x000A;<h3 dir="auto">&#x000A;<a id="user-content-overview" class="anchor" href="#overview" aria-hidden="true"></a>Overview</h3>&#x000A;&#x000A;<p dir="auto">In this assignment, you'll create one of two possible computer games: Hangman or Psychic. These apps will run in the browser, and feature dynamically updated HTML powered by your JavaScript code.</p>&#x000A;&#x000A;<h3 dir="auto">&#x000A;<a id="user-content-before-you-begin" class="anchor" href="#before-you-begin" aria-hidden="true"></a>Before You Begin</h3>&#x000A;&#x000A;<ol dir="auto">&#x000A;<li><p>Create a new GitHub repo called <code>Hangman-Game</code> or <code>Psychic-Game</code>, in accordance with the assignment you choose to complete. Then, clone it to your computer.</p></li>&#x000A;<li><p>Inside your local git repository, create an <code>index.html</code>.</p></li>&#x000A;<li><p>While still in your local git repo, create a directory called <code>assets</code>.</p></li>&#x000A;<li><p><code>cd</code> your way into the <code>assets</code> folder, then make three additional folders: <code>javascript</code>, <code>css</code> and <code>images</code>.</p></li>&#x000A;</ol>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li>In the <code>javascript</code> folder, make a file called <code>game.js</code>. Use the <code>src</code> attribute of the <code>script</code> tag to link to this file, rather than embedding the code directly in your HTML document.</li>&#x000A;<li>In the <code>css</code> folder, make a file called <code>style.css</code>.</li>&#x000A;<li>Also in the <code>css</code> folder, make a file called <code>reset.css</code>. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.</li>&#x000A;<li>In the <code>images</code> folder, save whatever images you plan on using.</li>&#x000A;</ul>&#x000A;&#x000A;<ol dir="auto">&#x000A;<li><p>Push the above changes to GitHub.</p></li>&#x000A;<li><p>Choose whichever game you'd like to build. Making the Psychic game will prove less challenging than coding Hangman. However, as the challenge of the Hangman exercise provides a more comprehensive review of this week's material, we suggest attempting that assignment first.</p></li>&#x000A;<li><p>Note: There's no shame if you'd prefer submitting Psychic—it's still a proper challenge.</p></li>&#x000A;<li><p>Push your selected game to Github Pages.</p></li>&#x000A;</ol>&#x000A;&#x000A;<h2 dir="auto">&#x000A;<a id="user-content-option-one-psychic-game-basic" class="anchor" href="#option-one-psychic-game-basic" aria-hidden="true"></a>Option One: Psychic Game (Basic)</h2>&#x000A;&#x000A;<p dir="auto"></p><div class="image-container"><a class="no-attachment-icon" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/raw/master/01-Class-Content/03-javascript/02-Homework/Instructions/Images/1-Psychic.jpg" target="_blank"><img src="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/raw/master/01-Class-Content/03-javascript/02-Homework/Instructions/Images/1-Psychic.jpg" alt="Psychic"></a></div>&#x000A;&#x000A;<ol dir="auto">&#x000A;<li><p><a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/raw/master/01-Class-Content/03-javascript/02-Homework/Instructions/psychic-game-demo.mov">Watch the demo</a>.</p></li>&#x000A;<li><p>You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:</p></li>&#x000A;<li><p>Guess what letter I'm thinking of</p></li>&#x000A;<li><p>Wins: (# of times the user has guessed the letter correctly)</p></li>&#x000A;<li><p>Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)</p></li>&#x000A;<li><p>Guesses Left: (# of guesses left. This will update)</p></li>&#x000A;<li><p>Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)</p></li>&#x000A;<li><p>When the player wins, increase the Wins counter and start the game over again (without refreshing the page).</p></li>&#x000A;<li><p>When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).</p></li>&#x000A;</ol>&#x000A;&#x000A;<h2 dir="auto">&#x000A;<a id="user-content-option-two-hangman-game-challenge-recommended" class="anchor" href="#option-two-hangman-game-challenge-recommended" aria-hidden="true"></a>Option Two: Hangman Game (Challenge - Recommended)</h2>&#x000A;&#x000A;<p dir="auto"></p><div class="image-container"><a class="no-attachment-icon" href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/raw/master/01-Class-Content/03-javascript/02-Homework/Instructions/Images/2-Hangman.jpg" target="_blank"><img src="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/raw/master/01-Class-Content/03-javascript/02-Homework/Instructions/Images/2-Hangman.jpg" alt="Hangman"></a></div>&#x000A;&#x000A;<ol dir="auto">&#x000A;<li><p><a href="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/raw/master/01-Class-Content/03-javascript/02-Homework/Instructions/hangman-game-demo.mov">Watch the demo</a>.</p></li>&#x000A;<li><p>Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!</p></li>&#x000A;<li><p>Use key events to listen for the letters that your players will type.</p></li>&#x000A;<li><p>Display the following on the page:</p></li>&#x000A;<li><p>Press any key to get started!</p></li>&#x000A;<li><p>Wins: (# of times user guessed the word correctly).</p></li>&#x000A;</ol>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li><p>If the word is <code>madonna</code>, display it like this when the game starts: <code>_ _ _ _ _ _ _</code>.</p></li>&#x000A;<li><p>As the user guesses the correct letters, reveal them: <code>m a d o _  _ a</code>.</p></li>&#x000A;</ul>&#x000A;&#x000A;<ol dir="auto">&#x000A;<li><p>Number of Guesses Remaining: (# of guesses remaining for the user).</p></li>&#x000A;<li><p>Letters Already Guessed: (Letters the user has guessed, displayed like <code>L Z Y H</code>).</p></li>&#x000A;<li><p>After the user wins/loses the game should automatically choose another word and make the user play it.</p></li>&#x000A;</ol>&#x000A;&#x000A;<h5 dir="auto">&#x000A;<a id="user-content-hangman-game-bonuses" class="anchor" href="#hangman-game-bonuses" aria-hidden="true"></a>Hangman Game Bonuses</h5>&#x000A;&#x000A;<ol dir="auto">&#x000A;<li>Play a sound or song when the user guesses their word correctly, like in our demo.</li>&#x000A;<li>Write some stylish CSS rules to make a design that fits your game's theme.</li>&#x000A;<li>&#x000A;<strong>HARD MODE:</strong> Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.</li>&#x000A;<li>Save your whole game and its properties in an object.</li>&#x000A;<li>Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.</li>&#x000A;<li>Don't forget to place your global variables and functions above your object.&#x000A;&#x000A;<ul>&#x000A;<li>Remember: global variables, then objects, then calls.</li>&#x000A;</ul>&#x000A;</li>&#x000A;<li>Definitely talk with a TA or your instructor if you get tripped up during this challenge.</li>&#x000A;</ol>&#x000A;&#x000A;<hr>&#x000A;&#x000A;<h4 dir="auto">&#x000A;<a id="user-content-a-few-tips" class="anchor" href="#a-few-tips" aria-hidden="true"></a>A Few Tips</h4>&#x000A;&#x000A;<ol dir="auto">&#x000A;<li>&#x000A;<strong>IMPORTANT:</strong> Whichever assignment you choose, code your game one piece at a time! Code all of your apps one piece at a time. <em>Always code one piece at a time!</em>&#x000A;</li>&#x000A;<li>Pseudocode your program and break the app down into tiny, manageable fragments. This will make the coding process much less frustrating and a veritable Mach number faster. Otherwise, you'll be chipping away at a giant chunk of abstraction for way too many hours.</li>&#x000A;</ol>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li>The ability to solve a large problem by treating it as a set of smaller ones is the hallmark of a strong programmer. Best start adapting this into your development routine now, to better prepare for your more complex future projects.</li>&#x000A;<li>Remember:&#x000A;&#x000A;<ol>&#x000A;<li>Split the whole program into many distinct, pseudocoded problems.</li>&#x000A;<li>Focus on one of the smaller problems and solve it.</li>&#x000A;<li>Only when you solve one problem should you then move onto your next problem.</li>&#x000A;</ol>&#x000A;</li>&#x000A;</ul>&#x000A;&#x000A;<ol dir="auto">&#x000A;<li>When you encounter bugs (and we all do), <code>console.log</code> will become your best friend. Regularly check your console to make sure your app is spitting out the right values.</li>&#x000A;</ol>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li>As a more advanced—but more powerful—alternative, feel free to experiment with the <a href="https://developers.google.com/web/tools/chrome-devtools/" rel="nofollow noreferrer" target="_blank">Chrome DevTools Debugger</a>.</li>&#x000A;</ul>&#x000A;&#x000A;<ol dir="auto">&#x000A;<li><p>Try your best to deliver a 'working/playable game' by the end of the deadline. If you're not making progress with Hangman, switch gears to the Psychic game. Contact your TA/Instructor if you're not making progress after 2 hours. We're here to help!</p></li>&#x000A;<li><p>Substance over style! Submitting a working game matters more that making a broken app that at least looks pretty. We're focusing on game mechanics, not just on the look and feel of your app.</p></li>&#x000A;<li><p>That said, coding a functional app that also looks pretty would be impressive.</p></li>&#x000A;<li><p>Always commit your work and back it up with GitHub pushes. You don't want to lose hours of your work because you didn't push it to GitHub every half hour or so.</p></li>&#x000A;</ol>&#x000A;&#x000A;<ul dir="auto">&#x000A;<li>&#x000A;<strong>Commit often</strong>.</li>&#x000A;</ul>&#x000A;&#x000A;<ol dir="auto">&#x000A;<li>Turn in anything you have! Even if you don't finish, we still want to see what you were able to accomplish in the time we gave you. This will help us know what concepts we could help you with, as well as what topics we should focus on in the coming lectures.</li>&#x000A;</ol>&#x000A;&#x000A;<hr>&#x000A;&#x000A;<h3 dir="auto">&#x000A;<a id="user-content-minimum-requirements" class="anchor" href="#minimum-requirements" aria-hidden="true"></a>Minimum Requirements</h3>&#x000A;&#x000A;<p dir="auto">Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.</p>&#x000A;&#x000A;<hr>&#x000A;&#x000A;<h3 dir="auto">&#x000A;<a id="user-content-one-more-thing" class="anchor" href="#one-more-thing" aria-hidden="true"></a>One More Thing</h3>&#x000A;&#x000A;<p dir="auto">If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.</p>&#x000A;&#x000A;<p dir="auto"><strong>Good Luck!</strong></p>&#x000A;&#x000A;<hr>&#x000A;&#x000A;<h3 dir="auto">&#x000A;<a id="user-content-copyright" class="anchor" href="#copyright" aria-hidden="true"></a>Copyright</h3>&#x000A;&#x000A;<p dir="auto">Coding Boot Camp <img class="emoji" title=":copyright:" alt=":copyright:" src="http://smu.bootcampcontent.com/assets/00A9-cc28663cdd3f8333d9bb57b511348cde4e51bda19cf0629dccb05c8fc425e079.png" height="20" width="20" align="absmiddle"> 2016. All Rights Reserved.</p>
</div>

</article>
</div>

</div>
<div class="modal" id="modal-remove-blob">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<a class="close" data-dismiss="modal" href="#">×</a>
<h3 class="page-title">Delete homework-instructions.md</h3>
</div>
<div class="modal-body">
<form class="form-horizontal js-replace-blob-form js-quick-submit js-requires-input" action="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/blob/master/01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="delete" /><input type="hidden" name="authenticity_token" value="HX7DHGTlapkJ/z0yOjD4naOw18aobrt5zfPjQYjoq2dpCyPSkbptvJHxacaqhZtMeT3N3avlsvnkX1BcN0aY/w==" /><div class="form-group commit_message-group">
<label class="control-label" for="commit_message-30685a1bf9e4e41cea42ca7213235634">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-30685a1bf9e4e41cea42ca7213235634" class="form-control js-commit-message" placeholder="Delete homework-instructions.md" required="required" rows="3">
Delete homework-instructions.md</textarea>
</div>
</div>
</div>

<div class="form-group branch">
<label class="control-label" for="target_branch">Target branch</label>
<div class="col-sm-10">
<input type="text" name="target_branch" id="target_branch" value="patch-3" required="required" class="form-control js-target-branch" />
<div class="js-create-merge-request-container">
<div class="checkbox">
<label for="create_merge_request-82208328d3dbbdc6a352e336ae316740"><input type="checkbox" name="create_merge_request" id="create_merge_request-82208328d3dbbdc6a352e336ae316740" value="1" class="js-create-merge-request" checked="checked" />
Start a <strong>new merge request</strong> with these changes
</label></div>
</div>
</div>
</div>
<input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch" />

<div class="form-group">
<div class="col-sm-offset-2 col-sm-10">
<button name="button" type="submit" class="btn btn-remove btn-remove-file">Delete file</button>
<a class="btn btn-cancel" data-dismiss="modal" href="#">Cancel</a>
</div>
</div>
</form></div>
</div>
</div>
</div>
<script>
  new NewCommitForm($('.js-replace-blob-form'))
</script>

<div class="modal" id="modal-upload-blob">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<a class="close" data-dismiss="modal" href="#">×</a>
<h3 class="page-title">Replace homework-instructions.md</h3>
</div>
<div class="modal-body">
<form class="js-quick-submit js-upload-blob-form form-horizontal" action="/SMU-Coding-Bootcamp/07-17-2017-SMU-Dallas-Class-Repository-FSF/update/master/01-Class-Content/03-javascript/02-Homework/Instructions/homework-instructions.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="LjgzKvtmJSRZfIraJpPhGlfW++1ZjtVbaPXJZ7EluvNaTdPkDjkiAcFy3i62JoLLjVvh9loF3NtBWXp6DouJaw==" /><div class="dropzone">
<div class="dropzone-previews blob-upload-dropzone-previews">
<p class="dz-message light">
Attach a file by drag &amp; drop or
<a class="markdown-selector" href="#">click to upload</a>
</p>
</div>
</div>
<br>
<div class="dropzone-alerts alert alert-danger data" style="display:none"></div>
<div class="form-group commit_message-group">
<label class="control-label" for="commit_message-8051822965cec730ea67bd8eb46a2445">Commit message
</label><div class="col-sm-10">
<div class="commit-message-container">
<div class="max-width-marker"></div>
<textarea name="commit_message" id="commit_message-8051822965cec730ea67bd8eb46a2445" class="form-control js-commit-message" placeholder="Replace homework-instructions.md" required="required" rows="3">
Replace homework-instructions.md</textarea>
</div>
</div>
</div>

<div class="form-group branch">
<label class="control-label" for="target_branch">Target branch</label>
<div class="col-sm-10">
<input type="text" name="target_branch" id="target_branch" value="patch-3" required="required" class="form-control js-target-branch" />
<div class="js-create-merge-request-container">
<div class="checkbox">
<label for="create_merge_request-70a837602b3f92758ec13d42d75221a3"><input type="checkbox" name="create_merge_request" id="create_merge_request-70a837602b3f92758ec13d42d75221a3" value="1" class="js-create-merge-request" checked="checked" />
Start a <strong>new merge request</strong> with these changes
</label></div>
</div>
</div>
</div>
<input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch" />

<div class="form-actions">
<button name="button" type="submit" class="btn btn-small btn-create btn-upload-file" id="submit-all">Replace file</button>
<a class="btn btn-cancel" data-dismiss="modal" href="#">Cancel</a>
</div>
</form></div>
</div>
</div>
</div>
<script>
  gl.utils.disableButtonIfEmptyField($('.js-upload-blob-form').find('.js-commit-message'), '.btn-upload-file');
  new BlobFileDropzone($('.js-upload-blob-form'), 'put');
  new NewCommitForm($('.js-upload-blob-form'))
</script>

</div>

</div>
</div>
</div>
</div>



</body>
</html>

