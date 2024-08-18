<?php

namespace App\Http\Controllers;

use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;

enum OperationStatus: string
{
    case Success = 'Success';
    case Error = 'Error';
}

class ContactController extends Controller
{
    /**
     * @var string
     */
    private $sheetDbUrl = "";

    public function __construct()
    {
        $this->sheetDbUrl = env("SHEET_DB_URL", "NONE");
    }
    /**
     * Display the contact page.
     */
    public function index(): Response
    {
        return inertia("Contact/Index");
    }
    /**
     * Handle send email feature via post method.
     */
    public function sendMailPost(Request $request): RedirectResponse
    {
        $contactData = $request->validate([
            "fullName" => "required|string|max:255",
            "email" => "required|email",
            "subject" => "required|string|max: 90",
            "message" => "required|string",
        ]);

        $response = Http::post($this->sheetDbUrl, [
            'data' => [
                'fullName' => $contactData['fullName'],
                'email' => $contactData['email'],
                'subject' => $contactData['subject'],
                'message' => $contactData['message'],
            ],
        ]);

        $contactStatus = $response->successful() ? OperationStatus::Success : OperationStatus::Error;
        return Redirect::route("contact.status", ["contactStatus" => $contactStatus]);
    }
    /**
     * Display the contact page.
     */
    public function displayStatus(): Response
    {
        return inertia("Contact/Status");
    }
}
