<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">

    <!-- ! Hide app brand if navbar-full -->
    <div class="app-brand demo">
        <a href="https://demos.pixinvent.com/frest-html-laravel-admin-template/demo-3" class="app-brand-link">
            <span class="app-brand-logo demo">
                <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>icon</title>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#5A8DEE" offset="0%"></stop>
                            <stop stop-color="#699AF9" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-2">
                            <stop stop-color="#FDAC41" offset="0%"></stop>
                            <stop stop-color="#E38100" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Login---V2" transform="translate(-667.000000, -290.000000)">
                            <g id="Login" transform="translate(519.000000, 244.000000)">
                                <g id="Logo" transform="translate(148.000000, 42.000000)">
                                    <g id="icon" transform="translate(0.000000, 4.000000)">
                                        <path d="M13.8863636,4.72727273 C18.9447899,4.72727273 23.0454545,8.82793741 23.0454545,13.8863636 C23.0454545,18.9447899 18.9447899,23.0454545 13.8863636,23.0454545 C8.82793741,23.0454545 4.72727273,18.9447899 4.72727273,13.8863636 C4.72727273,13.5423509 4.74623858,13.2027679 4.78318172,12.8686032 L8.54810407,12.8689442 C8.48567157,13.19852 8.45300462,13.5386269 8.45300462,13.8863636 C8.45300462,16.887125 10.8856023,19.3197227 13.8863636,19.3197227 C16.887125,19.3197227 19.3197227,16.887125 19.3197227,13.8863636 C19.3197227,10.8856023 16.887125,8.45300462 13.8863636,8.45300462 C13.5386269,8.45300462 13.19852,8.48567157 12.8689442,8.54810407 L12.8686032,4.78318172 C13.2027679,4.74623858 13.5423509,4.72727273 13.8863636,4.72727273 Z" id="Combined-Shape" fill="#4880EA"></path>
                                        <path d="M13.5909091,1.77272727 C20.4442608,1.77272727 26,7.19618701 26,13.8863636 C26,20.5765403 20.4442608,26 13.5909091,26 C6.73755742,26 1.18181818,20.5765403 1.18181818,13.8863636 C1.18181818,13.540626 1.19665566,13.1982714 1.22574292,12.8598734 L6.30410592,12.859962 C6.25499466,13.1951893 6.22958398,13.5378796 6.22958398,13.8863636 C6.22958398,17.8551125 9.52536149,21.0724191 13.5909091,21.0724191 C17.6564567,21.0724191 20.9522342,17.8551125 20.9522342,13.8863636 C20.9522342,9.91761479 17.6564567,6.70030817 13.5909091,6.70030817 C13.2336969,6.70030817 12.8824272,6.72514561 12.5388136,6.77314791 L12.5392575,1.81561642 C12.8859498,1.78721495 13.2366963,1.77272727 13.5909091,1.77272727 Z" id="Combined-Shape2" fill="url(#linearGradient-1)"></path>
                                        <rect id="Rectangle" fill="url(#linearGradient-2)" x="0" y="0" width="7.68181818" height="7.68181818"></rect>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </span>
            <span class="app-brand-text demo menu-text fw-bold ms-2">Frest</span>
        </a>

        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
            <i class="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
            <i class="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
        </a>
    </div>

    <!-- ! Hide menu divider if navbar-full -->
    <div class="menu-divider mt-0 ">
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
        <li class="menu-item {{ request()->is('pages/dashboard') ? 'active' : '' }}">
            <a href="{{ url('/pages/dashboard') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div class="text-truncate">Beranda</div>
            </a>
        </li>
        <li class="menu-item {{ request()->is('pages/honor') ? 'active' : '' }}">
            <a href="#" class="menu-link">
                <i class="menu-icon tf-icons bx bx-money"></i>
                <div class="text-truncate">Honor</div>
            </a>
        </li>
        <li class="menu-item">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-check-shield"></i>
                <div class="text-truncate">Hak Akses &amp; Perizinan</div>
            </a>
            <ul class="menu-sub">
                <li class="menu-item {{ request()->is('pages/hak-akses') ? 'active' : '' }}">
                    <a href="../app/access-roles.html" class="menu-link">
                        <div>Hak Akses</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/perizinan') ? 'active' : '' }}">
                    <a href="../app/access-permission.html" class="menu-link">
                        <div>Perizinan</div>
                    </a>
                </li>
            </ul>
        </li>
        <li class="menu-item">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-receipt"></i>
                <div class="text-truncate">Data Master</div>
            </a>

            <ul class="menu-sub">
                <li class="menu-item  {{ request()->is('pages/data-siswa') ? 'active' : '' }}">
                    <a href="layouts/collapsed-menu.html" class="menu-link">
                        <div>Data Siswa</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/data-guru') ? 'active' : '' }}">
                    <a href="layouts/content-navbar.html" class="menu-link">
                        <div>Data Guru</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/data-kelas') ? 'active' : '' }}">
                    <a href="layouts/content-nav-sidebar.html" class="menu-link">
                        <div>Data Kelas</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/data-jurusan') ? 'active' : '' }}">
                    <a href="layouts/horizontal.html" class="menu-link" target="_blank">
                        <div>Data Jurusan</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/data-rombel') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Data Rombel</div>
                    </a>
                </li>
            </ul>
        </li>
        <li class="menu-item">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-food-menu"></i>
                <div class="text-truncate">Administrasi Guru</div>
            </a>

            <ul class="menu-sub">
                <li class="menu-item {{ request()->is('pages/masuk-mengajar') ? 'active' : '' }}">
                    <a href="layouts/collapsed-menu.html" class="menu-link">
                        <div>Masuk Mengajar</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/rekap-absensi-mengajar') ? 'active' : '' }}">
                    <a href="layouts/content-navbar.html" class="menu-link">
                        <div>Rekap Absensi Mengajar</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/rekap-absensi-siswa') ? 'active' : '' }}">
                    <a href="layouts/content-nav-sidebar.html" class="menu-link">
                        <div>Rekap Absensi Siswa</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/jadwal-mengajar') ? 'active' : '' }}">
                    <a href="layouts/horizontal.html" class="menu-link" target="_blank">
                        <div>Jadwal Mengajar</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/matpel-pengampu') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Matpel Pengampu</div>
                    </a>
                </li>

                <li class="menu-item  {{ request()->is('pages/capaian-pembelajaran') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Capaian Pembelajangan</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/data-kasus-siswa') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Data Kasus Siswa</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/tujuan-pembelajaran') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Tujuan Pembelajaran</div>
                    </a>
                </li>
            </ul>
        </li>
        <li class="menu-item">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div class="text-truncate">Raport</div>
            </a>

            <ul class="menu-sub">
                <li class="menu-item {{ request()->is('pages/aktivitas-siswa') ? 'active' : '' }}">
                    <a href="layouts/collapsed-menu.html" class="menu-link">
                        <div>Aktivasi Raport</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/nilai-raport') ? 'active' : '' }}">
                    <a href="layouts/content-navbar.html" class="menu-link">
                        <div>Nilai Raport</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/matpel-kelas') ? 'active' : '' }}">
                    <a href="layouts/content-nav-sidebar.html" class="menu-link">
                        <div>Matpel Kelas</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/nilai-sikap') ? 'active' : '' }}">
                    <a href="layouts/horizontal.html" class="menu-link" target="_blank">
                        <div>Nilai Sikap</div>
                    </a>
                </li>

                <li class="menu-item  {{ request()->is('pages/rekap-nilai') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Rekap Nilai</div>
                    </a>
                </li>

                <li class="menu-item  {{ request()->is('pages/data-absensi') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Data Absensi</div>
                    </a>
                </li>

                <li class="menu-item  {{ request()->is('pages/data-kenaikan-kelas') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Data Kenaikan Kelas</div>
                    </a>
                </li>

                <li class="menu-item {{ request()->is('pages/data-ekstrakurikuler') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Data Ekstrakurikuler</div>
                    </a>
                </li>
                <li class="menu-item {{ request()->is('pages/data-niai-prakerin') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Data Niai Prakerin</div>
                    </a>
                </li>
                <li class="menu-item  {{ request()->is('pages/cetak-raport') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Cetak Raport</div>
                    </a>
                </li>
                <li class="menu-item {{ request()->is('pages/nilai-raport-siswa') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Nilai Raport Siswa</div>
                    </a>
                </li>
                <li class="menu-item {{ request()->is('pages/data-semua-raport') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Data Semua Raport</div>
                    </a>
                </li>
                <li class="menu-item {{ request()->is('pages/rekap-nilai-raport') ? 'active' : '' }}">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Rekap Nilai Raport</div>
                    </a>
                </li>
            </ul>
        </li>
        <li class="menu-item">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-edit"></i>
                <div class="text-truncate">Sumatif</div>
            </a>

            <ul class="menu-sub">
                <li class="menu-item">
                    <a href="layouts/collapsed-menu.html" class="menu-link">
                        <div>Nilai Sumatif (KM)</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="layouts/content-navbar.html" class="menu-link">
                        <div>UTS</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="layouts/content-nav-sidebar.html" class="menu-link">
                        <div>UAS</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="layouts/horizontal.html" class="menu-link" target="_blank">
                        <div>US</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Rekap Nilai US</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="layouts/without-menu.html" class="menu-link">
                        <div>Ujian Harian (K13)</div>
                    </a>
                </li>
            </ul>
        </li>
        <li class="menu-item">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-user"></i>
                <div class="text-truncate">WaliKelas</div>
            </a>

            <ul class="menu-sub">
                <li class="menu-item">
                    <a href="layouts/collapsed-menu.html" class="menu-link">
                        <div>Data Siswa)</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="layouts/content-navbar.html" class="menu-link">
                        <div>Data Kasus Siswa</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="layouts/content-nav-sidebar.html" class="menu-link">
                        <div>Absensi Harian</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a href="layouts/horizontal.html" class="menu-link" target="_blank">
                        <div>Rekap Absensi Harian</div>
                    </a>
                </li>
            </ul>
        </li>
        <li class="menu-item ">
            <a href="#" class="menu-link">
                <i class="menu-icon tf-icons bx bx-info-circle"></i>
                <div class="text-truncate">Informasi</div>
            </a>
        </li>
    </ul>

</aside>
