<?php

namespace App\Http\Controllers\API;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use File;

class ProductController extends Controller
{

    public function indexproduct(){

        $products = Product::all();
        return response()->json([
                'status'=>200,
                'products'=>$products,
        ]);

    }

    public function editproduct($id){

        $product = Product::find($id);
       if($product){
        return response()->json([
            'status'=>200,
            'product'=>$product,
    ]);
       }
       else{
        return response()->json([
            'status'=>404,
            'message'=>'El Producto No Fue Encontrado',
    ]);
       }

    }


    public function storeproduct(Request $request){

        $validator = Validator::make($request->all(),[
            'id_category'=>'required|max:191',
            'meta_title'=>'required|max:191',
            'meta_keyword'=>'required|max:20',
            'meta_description'=>'required|max:191',
            'name_product'=>'required|max:191',
            'description_product'=>'required|max:512',
            'price_product'=>'required|max:20',
            'discount_price'=>'required|max:20',
            'image1'=>'required|image|mimes:jpeg,png,jpg|max:5000',
            'image2'=>'required|image|mimes:jpeg,png,jpg|max:5000',
            'image3'=>'required|image|mimes:jpeg,png,jpg|max:5000',
            'image4'=>'required|image|mimes:jpeg,png,jpg|max:5000',

        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else{

        $product = new Product;
        $product->id_category = $request->input('id_category');
        $product->name_product = $request->input('name_product');
        $product->description_product = $request->input('description_product');

        $product->meta_title = $request->input('meta_title');
        $product->meta_keyword = $request->input('meta_keyword');
        $product->meta_description = $request->input('meta_description');

        $product->price_product = $request->input('price_product');
        $product->discount_price = $request->input('discount_price');

        if($request->hasFile('image1')){

            $file = $request->file('image1');
            $extension = $file->getClientOriginalExtension();
            $filename = time() .'.'.$extension;
            $file->move('uploads/product/', $filename);
            $product->image1 = 'uploads/product/'.$filename;
            
        }

        if($request->hasFile('image2')){

            $file = $request->file('image2');
            $extension = $file->getClientOriginalExtension();
            $filename = time() .'.'.$extension;
            $file->move('uploads2/product/', $filename);
            $product->image2 = 'uploads2/product/'.$filename;
            
        }

        if($request->hasFile('image3')){

            $file = $request->file('image3');
            $extension = $file->getClientOriginalExtension();
            $filename = time() .'.'.$extension;
            $file->move('uploads3/product/', $filename);
            $product->image3 = 'uploads3/product/'.$filename;
            
        }

        if($request->hasFile('image4')){

            $file = $request->file('image4');
            $extension = $file->getClientOriginalExtension();
            $filename = time() .'.'.$extension;
            $file->move('uploads4/product/', $filename);
            $product->image4 = 'uploads4/product/'.$filename;
            
        }

        $product-> status = $request->input('status') == true ? '1':'0';
        $product->save();

        return response()->json([
            'status'=>200,
            'message'=>'El Producto Fue Creado',
        ]);

    }
}

public function update(Request $request, $id){

    $validator = Validator::make($request->all(),[
            'id_category'=>'required|max:191',
            'meta_title'=>'required|max:191',
            'meta_keyword'=>'required|max:20',
            'meta_description'=>'required|max:191',
            'name_product'=>'required|max:191',
            'description_product'=>'required|max:512',
            'price_product'=>'required|max:20',
            'discount_price'=>'required|max:20',
            'image1'=>'required|image|mimes:jpeg,png,jpg|max:5000',
            'image2'=>'required|image|mimes:jpeg,png,jpg|max:5000',
            'image3'=>'required|image|mimes:jpeg,png,jpg|max:5000',
            'image4'=>'required|image|mimes:jpeg,png,jpg|max:5000',
    ]);

    if($validator->fails()){
        return response()->json([
            'status'=>422,
            'errors'=>$validator->messages(),
        ]);
    }
    else{

    $product = Product::find($id);
    if($product){
    
    $product-> id_category = $request->input('id_category');
    $product-> meta_title = $request->input('meta_title');
    $product-> meta_keyword = $request->input('meta_keyword');
    $product-> meta_description = $request->input('meta_description');
    $product-> name_product = $request->input('name_product');
    $product-> description_product = $request->input('description_product');
    $product-> price_product = $request->input('price_product');
    $product-> discount_price = $request->input('discount_price');

    if($request->hasFile('image1')){

        $path = $product->image1;
        if (File::exists($path)) {
            File::delete($path);
        }
        $file = $request->file('image1');
        $extension = $file->getClientOriginalExtension();
        $filename = time() .'.'.$extension;
        $file->move('uploads/product/', $filename);
        $product->image1 = 'uploads/product/'.$filename;
        
    }

    if($request->hasFile('image2')){

        $path = $product->image2;
        if (File::exists($path)) {
            File::delete($path);
        }
        $file = $request->file('image2');
        $extension = $file->getClientOriginalExtension();
        $filename = time() .'.'.$extension;
        $file->move('uploads2/product/', $filename);
        $product->image2 = 'uploads2/product/'.$filename;
        
    }

    if($request->hasFile('image3')){

        $path = $product->image3;
        if (File::exists($path)) {
            File::delete($path);
        }
        $file = $request->file('image3');
        $extension = $file->getClientOriginalExtension();
        $filename = time() .'.'.$extension;
        $file->move('uploads3/product/', $filename);
        $product->image3 = 'uploads3/product/'.$filename;
        
    }

    if($request->hasFile('image4')){

        $path = $product->image4;
        if (File::exists($path)) {
            File::delete($path);
        }
        $file = $request->file('image4');
        $extension = $file->getClientOriginalExtension();
        $filename = time() .'.'.$extension;
        $file->move('uploads4/product/', $filename);
        $product->image4 = 'uploads4/product/'.$filename;
        
    }

    $product-> status = $request->input('status') == true ? '1':'0';
    $product->update();

    return response()->json([
        'status'=>200,
        'message'=>'El Producto Fue Actualizado',
    ]);

}
    else{
        return response()->json([
            'status'=>404,
        'message'=>'Producto No Encontrado',
        ]);
    }

}
}

public function search($key){
    return Product::where('name_product', 'Like', "%$key%")->get();
}

public function destroy($id){
    $product = Product::find($id);
    if($product){
        $product->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Categoria Eliminada',
        ]);
    }else{
        return response()->json([
            'status'=>404,
            'message'=>'Categoria No Encontrada',
        ]);
    }
}

}
