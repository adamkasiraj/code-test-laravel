<?php 

namespace App;
use Illuminate\Database\Eloquent\Model;

class NameEntry extends Model {
	protected $table = "name_entries";

	// An array of the fields we can fill in the name_entries table
	protected $fillable = ['names', 'id', 'created_at', 'updated_at'];

	public function names()
	{
		return $this;
	}


}