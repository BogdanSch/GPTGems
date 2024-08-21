<?php

namespace App\Http\Controllers;

use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use SheetDB\SheetDB;

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
    private $sheetDbKey = "";

    public function __construct()
    {
        $this->sheetDbKey = env("SHEET_DB_KEY", "NONE");
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
            "subject" => "required|string|max:90",
            "message" => "required|string",
        ]);

        $sheetdb = new SheetDB($this->sheetDbKey);
        $contactStatus = OperationStatus::Error;

        try {
            $sheetdb->create($contactData);
            $contactStatus = OperationStatus::Success;
        } catch (\Exception $e) {
            $contactStatus = OperationStatus::Error;
        }

        return Redirect::route("contact.status", ["contactStatus" => $contactStatus->value]);
    }
    /**
     * Display the contact page.
     */
    public function displayStatus(Request $request): Response
    {
        $contactStatus = $request->query("contactStatus", OperationStatus::Error->value);
        return inertia("Contact/Status", ["contactStatus" => $contactStatus]);
    }
}
