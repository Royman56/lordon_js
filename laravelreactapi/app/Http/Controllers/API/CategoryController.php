<?php

namespace App\Http\Controllers\API;

use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use File;

class CategoryController extends Controller
{

    public function index(){

            $category = Category::all();
            return response()->json([
                    'status'=>200,
                    'category'=>$category,
            ]);
    
        }

        public function allcategory(){

            $category = Category::where('status', '0')->get();
            return response()->json([
                    'status'=>200,
                    'category'=>$category,
            ]);
    
        }

        public function edit($id){

            $category = Category::find($id);
           if($category){
            return response()->json([
                'status'=>200,
                'category'=>$category,
        ]);
           }
           else{
            return response()->json([
                'status'=>404,
                'message'=>'La Categoria No Fue Encontrada',
        ]);
           }
    
        }

    public function store(Request $request){

        $validator = Validator::make($request->all(),[
            'slug'=>'required|max:191',
            'name'=>'required|max:20',
            'description'=>'required|max:191',
            'image'=>'required|image|mimes:jpeg,png,jpg|max:5000',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else{

        $category = new Category;
        $category-> slug = $request->input('slug');
        $category-> name = $request->input('name');
        $category-> description = $request->input('description');

        if($request->hasFile('image')){

            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() .'.'.$extension;
            $file->move('uploads/category/', $filename);
            $category->image = 'uploads/category/'.$filename;
            
        }

        $category-> status = $request->input('status') == true ? '1':'0';
        $category->save();

        return response()->json([
            'status'=>200,
            'message'=>'La Categoria Fue Creada',
        ]);

    }
}

public function update(Request $request, $id){

    $validator = Validator::make($request->all(),[
        'slug'=>'required|max:191',
        'name'=>'required|max:20',
        'description'=>'required|max:191',
        'image'=>'required|image|mimes:jpeg,png,jpg|max:5000',
    ]);

    if($validator->fails()){
        return response()->json([
            'status'=>422,
            'errors'=>$validator->messages(),
        ]);
    }
    else{

    $category = Category::find($id);
    if($category){

    
    $category-> slug = $request->input('slug');
    $category-> name = $request->input('name');
    $category-> description = $request->input('description');
    $category-> status = $request->input('status') == true ? '1':'0';
    if($request->hasFile('image')){

        $path = $category->image;
        if (File::exists($path)) {
            File::delete($path);
        }
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $filename = time() .'.'.$extension;
        $file->move('uploads/category/', $filename);
        $category->image = 'uploads/category/'.$filename;
        
    }
    $category->update();

    return response()->json([
        'status'=>200,
        'message'=>'La Categoria Fue Creada',
    ]);

}
    else{
        return response()->json([
            'status'=>404,
        'message'=>'Categoria No Encontrada',
        ]);
    }

}
}

    public function destroy($id){
    $category = Category::find($id);
    if($category){
        $category->delete();
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
