<?php

namespace App\Http\Controllers;


use App\Http\Requests;
use App\Http\Controllers\Controller;    
use App\NameEntry;
use Illuminate\Support\Facades\Request;


class NameEntriesController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
    // Gets name entries
    public function index()
    {
        $name = NameEntry::get();

        return $name;
    }

    /**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
    // Grab all the data passed into the request and save a new record
	public function store()
	{
	    $data = Request::all();

	    $nameentry = new NameEntry();

	    $nameentry->fill($data);

	    $nameentry->save();

	    

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
	    $nameentry = NameEntry::find($id);

	    $nameentry->delete();   
	}
}