<!doctype html>
<!--<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">-->
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSRF Token -->
    <link rel="shortcut icon" href="/img/escudo.svg" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <!-- Styles -->
    <link href="{{ mix('css/app.css')  }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        @php
            $user = Auth::user();
        @endphp
        <App-Component :user="{{json_encode($user)}}"
        :env="{{json_encode(config("app.env"))}}"
        />
    </div>
</body>

</html>
