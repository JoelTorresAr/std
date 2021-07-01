<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="shortcut icon" href="/img/escudo.svg" />
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <header id="mu-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="mu-header-area">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div class="mu-header-top-left">
                                        <div class="mu-top-email">
                                            <i class="fa fa-envelope"></i>
                                            <span>msanjosedelourdes@gmail.com</span>
                                        </div>
                                        <div class="mu-top-phone">
                                            <i class="fa fa-phone"></i>
                                            <span>076 - 434295</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div class="mu-header-top-right">
                                        <nav>
                                            <ul class="mu-top-social-nav">

                                                <li><a href="https://webmail.munijaen.gob.pe" target="_blank"><span
                                                            class="fa fa-envelope"></span></a></li>
                                                <li><a href="https://www.facebook.com/MuniJaen" target="_blank"><span
                                                            class="fab fa-facebook-square"></span></a></li>
                                                <li><a href="https://twitter.com/MuniJaen04/" target="_blank"><span
                                                            class="fab fa-twitter"></span></a></li>
                                                <li><a href="https://www.instagram.com/MuniJaen04/"
                                                        target="_blank"><span class="fab fa-instagram"></span></a></li>
                                                <li><a href="https://www.youtube.com/channel/UCu-8_LDtBzcit6qTA6yvacQ"
                                                        target="_blank"><span class="fab fa-youtube-play"></span></a>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <i><img src="/img/escudo.svg" width="50" height="45"></i>
                    <span><img src="/img/nombre.jpg" width="150" height="45"></span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Iniciar Sesion') }}</a>
                            </li>
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                                 document.getElementById('logout-form').submit();">
                                        {{ __('Cerrar Sesion') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-1">
            @yield('content')
        </main>
    </div>
</body>

</html>
<style>
    /*==================
 HEADER SECTION
====================*/

    #mu-header {
        background-color: #01BAFD;
        display: inline;
        float: left;
        width: 100%;
        height: 52px;
    }

    #mu-header .mu-header-area {
        display: inline;
        float: left;
        padding: 10px 0;
        width: 100%;
    }

    #mu-header .mu-header-area .mu-header-top-left {
        display: inline;
        float: left;
        width: 100%;
    }

    #mu-header .mu-header-area .mu-header-top-left .mu-top-email {
        display: inline;
        float: left;
        font-size: 14px;
        color: #FFF;
        /* COLOR DE TEXTO*/
    }

    #mu-header .mu-header-area .mu-header-top-left .mu-top-email i {
        margin-right: 5px;
    }

    #mu-header .mu-header-area .mu-header-top-left .mu-top-phone {
        border-left: 1px solid #ddd;
        color: #FFF;
        /* COLOR DE TEXTO*/
        display: inline;
        font-size: 14px;
        float: left;
        margin-left: 15px;
        padding-left: 15px;
    }

    #mu-header .mu-header-area .mu-header-top-left .mu-top-phone i {
        margin-right: 5px;
    }

    #mu-header .mu-header-area .mu-header-top-right {
        display: inline;
        float: left;
        text-align: right;
        width: 100%;
    }

    #mu-header .mu-header-area .mu-header-top-right .mu-top-social-nav {
        display: inline-block;
    }

    #mu-header .mu-header-area .mu-header-top-right .mu-top-social-nav li {
        display: inline-block;
    }

    #mu-header .mu-header-area .mu-header-top-right .mu-top-social-nav li a {
        display: inline-block;
        font-size: 16px;
        color: #FFF;
        /* COLOR DE TEXTO*/
        padding: 0 8px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

</style>
