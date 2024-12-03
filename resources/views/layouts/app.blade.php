<!DOCTYPE html>

<html lang="en" class="light-style layout-compact layout-navbar-fixed layout-menu-fixed     " dir="ltr"
  data-theme="theme-semi-dark"
  data-assets-path="https://demos.pixinvent.com/frest-html-laravel-admin-template/demo/assets/"
  data-base-url="https://demos.pixinvent.com/frest-html-laravel-admin-template/demo-3" data-framework="laravel"
  data-template="vertical-menu-theme-semi-dark-light">


<!-- Mirrored from demos.pixinvent.com/frest-html-laravel-admin-template/demo-3/ by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 02 Dec 2024 09:01:31 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->

<head>
  <meta charset="utf-8" />
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

  <title>Sistem Manajemen Akademik</title>
  <meta name="description" content="Start your development with a Dashboard for Bootstrap 5" />
  <meta name="keywords" content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5">
  <!-- laravel CRUD token -->
  <meta name="csrf-token" content="dUg817yeIBD3wwx9WoliSg56C2wkUBZ3s1ayk6b6">
  <!-- Canonical SEO -->
  <link rel="canonical" href="https://1.envato.market/frest_admin">
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon"
    href="https://demos.pixinvent.com/frest-html-laravel-admin-template/demo/assets/img/favicon/favicon.ico" />


  <!-- Google Tag Manager (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) -->
  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        '../../../www.googletagmanager.com/gtm5445.html?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-5J3LMKC');
  </script>
  <!-- End Google Tag Manager -->


  <!-- Include Styles -->
  <!-- $isFront is used to append the front layout styles only on the front layout otherwise the variable will be blank -->
  <!-- BEGIN: Theme CSS-->
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com/">
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
    rel="stylesheet">

  <link rel="stylesheet"
    href="{{ asset('demo/assets/vendor/fonts/boxiconsc4a7.css?id=87122b3a3900320673311cebdeb618da') }}" />
  <link rel="stylesheet"
    href="{{ asset('demo/assets/vendor/fonts/fontawesome8a69.css?id=a2997cb6a1c98cc3c85f4c99cdea95b5') }}" />
  <link rel="stylesheet"
    href="{{ asset('demo/assets/vendor/fonts/flag-iconsa536.css?id=64c88d2dd3933784a36ff69032119fde') }}" />
  <!-- Core CSS -->
  <link rel="stylesheet"
    href="{{ asset('demo/assets/vendor/css/rtl/core6906.css?id=c3e02a88be1a1fd55969cac55ff801ba') }}"
    class="template-customizer-core-css" />
  <link rel="stylesheet"
    href="{{ asset('demo/assets/vendor/css/rtl/theme-semi-dark1242.css?id=f623f725bac6efe194367e617a9c3d5d') }}"
    class="template-customizer-theme-css" />
  <link rel="stylesheet" href="{{ asset('demo/assets/css/demo4c11.css?id=333c432ea361867d487b614f3cf0acde') }}" />
  <!-- Vendors CSS -->
  <link rel="stylesheet"
    href="{{ asset('demo/assets/vendor/libs/perfect-scrollbar/perfect-scrollbarc93c.css?id=53cacc4fc4167217188dae059f8812c2') }}" />
  <link rel="stylesheet"
    href="{{ asset('demo/assets/vendor/libs/typeahead-js/typeahead7d44.css?id=2ff0314e298854fd9ac99bab7cf20e36') }}" />

  <!-- Vendor Styles -->
  <link rel="stylesheet" href="{{ asset('demo/assets/vendor/libs/apex-charts/apex-charts.css') }}" />

  @stack('style')


  <!-- Page Styles -->

  <!-- Include Scripts for customizer, helper, analytics, config -->
  <!-- $isFront is used to append the front layout scriptsIncludes only on the front layout otherwise the variable will be blank -->
  <!-- laravel style -->
  <script src="{{ asset('demo/assets/vendor/js/helpers.js') }}"></script>
  <!-- beautify ignore:start -->
  <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
  <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->
  <script src="{{ asset('demo/assets/vendor/js/template-customizer.js') }}"></script>

  <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
  <script src="{{ asset('demo/assets/js/config.js') }}"></script>

  <script>
    window.templateCustomizer = new TemplateCustomizer({
      cssPath: '',
      themesPath: '',
      defaultStyle: "light",
      defaultShowDropdownOnHover: "true", // true/false (for horizontal layout only)
      displayCustomizer: "true",
      lang: 'en',
      pathResolver: function(path) {
        var resolvedPaths = {
          // Core stylesheets
          'core.css': 'https://demos.pixinvent.com/frest-html-laravel-admin-template/demo/assets/vendor/css/rtl/core.css?id=c3e02a88be1a1fd55969cac55ff801ba',
          'core-dark.css': 'https://demos.pixinvent.com/frest-html-laravel-admin-template/demo/assets/vendor/css/rtl/core-dark.css?id=1e255bad2869e0362eec31ccfdaf87ae',

          // Themes
          'theme-default.css': 'https://demos.pixinvent.com/frest-html-laravel-admin-template/demo/assets/vendor/css/rtl/theme-default.css?id=6bbe48ef31287ddab6fba54a09a61b7a',
          'theme-default-dark.css': 'https://demos.pixinvent.com/frest-html-laravel-admin-template/demo/assets/vendor/css/rtl/theme-default-dark.css?id=c43a588cdca25ced7f2fb03dc3f7a5f8',
          'theme-bordered.css': 'https://demos.pixinvent.com/frest-html-laravel-admin-template/demo/assets/vendor/css/rtl/theme-bordered.css?id=88f119e2bc5ff2140e6d6143cdf27135',
          'theme-bordered-dark.css': 'https://demos.pixinvent.com/frest-html-laravel-admin-template/demo/assets/vendor/css/rtl/theme-bordered-dark.css?id=babb9f077136cd902e3ec4b444bbad36',
          'theme-semi-dark.css': 'https://demos.pixinvent.com/frest-html-laravel-admin-template/demo/assets/vendor/css/rtl/theme-semi-dark.css?id=f623f725bac6efe194367e617a9c3d5d',
          'theme-semi-dark-dark.css': 'https://demos.pixinvent.com/frest-html-laravel-admin-template/demo/assets/vendor/css/rtl/theme-semi-dark-dark.css?id=642cbf5f22317d363b4c2856dc2638a1',
        }
        return resolvedPaths[path] || path;
      },
      'controls': ["rtl", "style", "headerType", "contentLayout", "layoutCollapsed", "layoutNavbarOptions",
        "themes"
      ],
    });
  </script>
</head>

<body>

  <!-- Google Tag Manager (noscript) (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5J3LMKC" height="0" width="0" style="display: none; visibility: hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->


  <!-- Layout Content -->
  <div class="layout-wrapper layout-content-navbar ">
    <div class="layout-container">

      @include('components.sidebar')


      <!-- Layout page -->
      <div class="layout-page">




        <!-- BEGIN: Navbar-->
        <!-- Navbar -->
        @include('components.header')
        <!-- / Navbar -->
        <!-- END: Navbar-->


        <!-- Content wrapper -->
        <div class="content-wrapper">

          <!-- Content -->
          <div class="container-xxl flex-grow-1 container-p-y">

            @yield('content')
            <!--/ Activity Timeline -->
          </div>

        </div>
        <!-- / Content -->

        <!-- Footer -->
        <!-- Footer-->
        @include('components.footer')
        <!--/ Footer-->
        <!-- / Footer -->
        <div class="content-backdrop fade"></div>
      </div>
      <!--/ Content wrapper -->
    </div>
    <!-- / Layout page -->
  </div>

  <!-- Overlay -->
  <div class="layout-overlay layout-menu-toggle"></div>
  <!-- Drag Target Area To SlideIn Menu On Small Screens -->
  <div class="drag-target"></div>
  </div>
  <!-- / Layout wrapper -->
  <!--/ Layout Content -->


  <!-- Include Scripts -->
  <!-- $isFront is used to append the front layout scripts only on the front layout otherwise the variable will be blank -->
  <!-- BEGIN: Vendor JS-->
  <script src="{{ asset('demo/assets/vendor/libs/jquery/jquery1e84.js?id=0f7eb1f3a93e3e19e8505fd8c175925a') }}"></script>
  <script src="{{ asset('demo/assets/vendor/libs/jquery/jquery1e84.js?id=0f7eb1f3a93e3e19e8505fd8c175925a') }}"></script>
  <script src="{{ asset('demo/assets/vendor/js/bootstrapc7b4.js?id=ed421744bd6d91d4ff92284ba4e3577b') }}"></script>
  <script
    src="{{ asset('demo/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar6188.js?id=44b8e955848dc0c56597c09f6aebf89a') }}">
  </script>
  <script src="{{ asset('demo/assets/vendor/libs/hammer/hammer2de0.js?id=0a520e103384b609e3c9eb3b732d1be8') }}"></script>
  <script src="{{ asset('demo/assets/vendor/libs/typeahead-js/typeahead60e7.js?id=f6bda588c16867a6cc4158cb4ed37ec6') }}">
  </script>
  <script src="{{ asset('demo/assets/vendor/js/menu5ee0.js?id=dc983b06bee817c5eb2314a4177537b5') }}"></script>
  <script src="{{ asset('demo/assets/vendor/libs/apex-charts/apexcharts.js') }}"></script>
  <!-- END: Page Vendor JS-->
  <!-- BEGIN: Theme JS-->
  <script src="{{ asset('demo/assets/js/mainbb17.js?id=51f11c4fe8215e76c5b4a4085364f176') }}"></script>

  <!-- END: Theme JS-->
  <!-- Pricing Modal JS-->
  <!-- END: Pricing Modal JS-->
  <!-- BEGIN: Page JS-->
  <script src="{{ asset('demo/assets/js/dashboards-analytics.js') }}"></script>
  <!-- END: Page JS-->

  @stack('scripts')

</body>


<!-- Mirrored from demos.pixinvent.com/frest-html-laravel-admin-template/demo-3/ by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 02 Dec 2024 09:02:12 GMT -->

</html>
