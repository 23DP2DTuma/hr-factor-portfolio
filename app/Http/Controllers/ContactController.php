<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    /**
     * Iegūt visas kontaktformas ziņas.
     */
    public function index(): JsonResponse
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();

        return response()->json($contacts);
    }

    /**
     * Saglabāt jaunu kontaktformas ziņu.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:100',
            'email'   => 'required|email|max:100',
            'message' => 'nullable|string|max:2000',
        ]);

        $contact = Contact::create($validated);

        return response()->json($contact, 201);
    }

    /**
     * Dzēst kontaktformas ziņu.
     */
    public function destroy(Contact $contact): JsonResponse
    {
        $contact->delete();

        return response()->json(['message' => 'Ziņa dzēsta']);
    }
}
