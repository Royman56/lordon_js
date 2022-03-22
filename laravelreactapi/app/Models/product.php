<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\SubCategory;

class product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $fillable = [
        'id_category',
        'meta_title',
        'meta_keyword',
        'meta_description',
        'name_product',
        'description_product',
        'price_product',
        'discount_price',
        'image1',
        'image2',
        'image3',
        'image4',
        'status',
    ];

    protected $with = ['subcategory'];
    public function subcategory(){
        return $this->belongsTo(SubCategory::class, 'id_category', 'id');
    }
}
