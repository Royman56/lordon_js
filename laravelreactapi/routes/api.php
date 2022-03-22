<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\SubCategoryController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\FrontendController;
use App\Http\Controllers\API\AuthController;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
  Route::get('/checkingAuthenticated', function(){
    return response()->json(['message'=>'Estás En', 'status'=>200], 200);
  });
  Route::post('logout', [AuthController::class, 'logout']);
});

Route::get('getCategory', [FrontendController::class, 'category']);
Route::get('getSubCategory', [FrontendController::class, 'subcategory']);
Route::get('getProduct', [FrontendController::class, 'getproduct']);
Route::get('fetchproduct/{slug}', [FrontendController::class, 'product']);
Route::get('fetchcategory/{slug}', [FrontendController::class, 'viewcategory']);
Route::get('viewproductdetail/{category_slug}/{product_slug}', [FrontendController::class, 'viewproduct']);

//category
Route::get('view-category', [CategoryController::class, 'index']);
Route::post('store-category', [CategoryController::class, 'store']);
Route::get('edit-category/{id}', [CategoryController::class, 'edit']);
Route::post('update-category/{id}', [CategoryController::class, 'update']);
Route::delete('delete-category/{id}', [CategoryController::class, 'destroy']);
Route::get('all-category', [CategoryController::class, 'allcategory']);

//subcategory
Route::get('view-subcategory', [SubCategoryController::class, 'indexsub']);
Route::post('store-subcategory', [SubCategoryController::class, 'storesub']);
Route::get('edit-subcategory/{id}', [SubCategoryController::class, 'editsub']);
Route::post('update-subcategory/{id}', [SubCategoryController::class, 'updatesub']);
Route::delete('delete-subcategory/{id}', [SubCategoryController::class, 'destroysub']);
Route::get('all-subcategory', [SubCategoryController::class, 'allsubcategory']);

//product
Route::post('store-product', [ProductController::class, 'storeproduct']);
Route::get('view-product', [ProductController::class, 'indexproduct']);
Route::delete('delete-product/{id}', [ProductController::class, 'destroy']);
Route::get('edit-product/{id}', [ProductController::class, 'editproduct']);
Route::post('update-product/{id}', [ProductController::class, 'update']);
Route::get('search/{key}', [ProductController::class, 'search']);

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  //  return $request->user();
//});
