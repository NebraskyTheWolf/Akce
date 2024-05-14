@extends('index')

@section('title', __('common.forbidden'))
@section('description', __('common.forbidden.description'))

@section('head')
    <style>
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            h1 {
                font-size: 3em;
                font-weight: bold;
                color: #dc3545;
                margin-bottom: 1em;
                animation: pulse 2s infinite; /* Apply pulse animation */
            }

            p {
                font-size: 1.2em;
                color: #6c757d;
                margin-bottom: 2em;
            }

            a {
                color: #ffffff;
                background-color: #007bff;
                border: none;
                padding: .375rem .75rem;
                font-size: 1rem;
                line-height: 1.5;
                border-radius: .25rem;
                text-decoration: none;
                display: inline-block;
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

                &:hover {
                    color: #ffffff;
                    background-color: #0056b3;
                }
            }

            @keyframes pulse {
                0% {
                    border-color: #FF002E;
                    box-shadow: 0 0 0 0 rgba(255, 0, 46, 0.7);
                }
                50% {
                    border-color: #FF002E;
                    box-shadow: 0 0 0 10px rgba(255, 0, 46, 0);
                }
                100% {
                    border-color: #FF002E;
                    box-shadow: 0 0 0 0 rgba(255, 0, 46, 0);
                }
            }
        }
    </style>
@endsection

@section('content')
    <div class="container mt-5">
        <h1>{{ __('common.forbidden') }}</h1>
        <p>{{ __('common.forbidden.description') }}</p>
        <a href="{{ route('outings') }}" class="btn btn-primary">{{ __('common.home') }}</a>
    </div>
@endsection
