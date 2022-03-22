<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\Product;

class FrontendController extends Controller
{
    public function category(){

        $category = Category::where('status', '0')->get();
        return response()->json([
                'status'=>200,
                'category'=>$category,
        ]);

    }

    public function subcategory(){

        $subcategory = SubCategory::where('status', '0')->get();
        return response()->json([
                'status'=>200,
                'subcategory'=>$subcategory,
        ]);

    }

    public function getproduct(){

        $product = Product::where('status', '0')->get();
        return response()->json([
                'status'=>200,
                'product'=>$product,
        ]);

    }

    public function product($slug){

        $subcategory = SubCategory::where('slug', $slug)->where('status', '0')-> first();
        if ($subcategory) {
            $product = Product::where('id_category', $subcategory->id)->where('status', '0')-> get();
        
        if ($product) {
            return response()->json([
                'status'=>200,
                'product_data'=>[
                    'product'=>$product,
                    'subcategory'=>$subcategory,
                ]
        ]);
    }
        else{
            return response()->json([
                'status'=>400,
                'message'=>'Producto No Disponible'
        ]);
        }
    }

    else{
        return response()->json([
            'status'=>404,
            'message'=>'Categoria No Encontrada'
    ]);
    }       

    }

    public function viewcategory($slug){

        $category = Category::where('slug', $slug)->where('status', '0')-> first();
        if ($category) {
            $subcategory = SubCategory::where('id_category', $category->id)->where('status', '0')-> get();
        
        if ($subcategory) {
            return response()->json([
                'status'=>200,
                'subcategory_data'=>[
                    'subcategory'=>$subcategory,
                    'category'=>$category,
                ]
        ]);
    }
        else{
            return response()->json([
                'status'=>400,
                'message'=>'Sub Categoria No Disponible'
        ]);
        }
    }

    else{
        return response()->json([
            'status'=>404,
            'message'=>'Categoria No Encontrada'
    ]);
    }       

    }

    public function viewproduct($category_slug, $product_slug){
        $subcategory = SubCategory::where('slug', $category_slug)->where('status', '0')-> first();
        if ($subcategory) {
            $product = Product::where('id_category', $subcategory->id)
            ->where('id', $product_slug)-> where('status', '0')-> first();
        
        if ($product) {
            return response()->json([
                'status'=>200,
                'product'=>$product,

        ]);
    }
        else{
            return response()->json([
                'status'=>400,
                'message'=>'Producto No Disponible'
        ]);
        }
    }

    else{
        return response()->json([
            'status'=>404,
            'message'=>'Categoria No Encontrada'
    ]);
    }       

    }
}
