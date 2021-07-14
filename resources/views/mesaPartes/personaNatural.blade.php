@extends('layouts.app')

@section('content')
<mesapartes-persona-natural :tipos_documentos="{{json_encode($tipos_documento) }}" :tipos_tramite="{{ json_encode($tipos_tramite) }}">
</mesapartes-persona-natural>
@endsection
