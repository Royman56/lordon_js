<?php

namespace App\Http\Controllers\API;

use App\Models\SubCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use File;

class SubCategoryController extends Controller
{

    public function indexsub(){

            $subcategory = SubCategory::all();
            return response()->json([
                    'status'=>200,
                    'subcategory'=>$subcategory,
            ]);
    
        }

        public function allsubcategory(){

            $subcategory = SubCategory::where('status', '0')->get();
            return response()->json([
                    'status'=>200,
                    'subcategory'=>$subcategory,
            ]);
    
        }

        public function editsub($id){

            $subcategory = SubCategory::find($id);
           if($subcategory){
            return response()->json([
                'status'=>200,
                'subcategory'=>$subcategory,
        ]);
           }
           else{
            return response()->json([
                'status'=>404,
                'message'=>'La Sub Categoria No Fue Encontrada',
        ]);
           }
    
        }

    public function storesub(Request $request){

        $validator = Validator::make($request->all(),[
            'slug'=>'required|max:191',
            'name'=>'required|max:40',
            'id_category'=>'required|max:191',
            'image'=>'required|image|mimes:jpeg,png,jpg|max:5000',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else{

        $subcategory = new SubCategory;
        $subcategory-> slug = $request->input('slug');
        $subcategory-> name = $request->input('name');
        $subcategory-> id_category = $request->input('id_category');

        if($request->hasFile('image')){

            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() .'.'.$extension;
            $file->move('uploads/subcategory/', $filename);
            $subcategory->image = 'uploads/subcategory/'.$filename;
            
        }

        $subcategory-> status = $request->input('status') == true ? '1':'0';
        $subcategory->save();

        return response()->json([
            'status'=>200,
            'message'=>'La Sub Categoria Fue Creada',
        ]);

    }
}

public function updatesub(Request $request, $id){

    $validator = Validator::make($request->all(),[
        'slug'=>'required|max:191',
        'name'=>'required|max:40',
        'id_category'=>'required|max:191',
        'image'=>'required|image|mimes:jpeg,png,jpg|max:5000',
    ]);

    if($validator->fails()){
        return response()->json([
            'status'=>422,
            'errors'=>$validator->messages(),
        ]);
    }
    else{

    $subcategory = SubCategory::find($id);
    if($subcategory){

    
    $subcategory-> slug = $request->input('slug');
    $subcategory-> name = $request->input('name');
    $subcategory-> id_category = $request->input('id_category');
    $subcategory-> status = $request->input('status') == true ? '1':'0';
    if($request->hasFile('image')){

        $path = $subcategory->image;
        if (File::exists($path)) {
            File::delete($path);
        }
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $filename = time() .'.'.$extension;
        $file->move('uploads/subcategory/', $filename);
        $subcategory->image = 'uploads/subcategory/'.$filename;
        
    }
    $subcategory->update();

    return response()->json([
        'status'=>200,
        'message'=>'La Sub Categoria Fue Creada',
    ]);

}
    else{
        return response()->json([
            'status'=>404,
        'message'=>'Sub Categoria No Encontrada',
        ]);
    }

}
}

    public function destroysub($id){
    $subcategory = SubCategory::find($id);
    if($subcategory){
        $subcategory->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Sub Categoria Eliminada',
        ]);
    }else{
        return response()->json([
            'status'=>404,
            'message'=>'Sub Categoria No Encontrada',
        ]);
    }
}

}
