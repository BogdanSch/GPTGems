<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Display the about page.
     */
    public function index(): Response
    {
        return inertia("About");
    }
}
