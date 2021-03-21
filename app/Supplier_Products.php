<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplier_Products extends Model
{
    protected $fillable = [
        'id', 'supply_id', 'product_id',
    ];
}
