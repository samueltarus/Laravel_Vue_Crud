<?php

namespace App\Http\Controllers;

use App\Order;
use App\Order_Details;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {

        $orders = Order::all();
        return $orders;

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'quantity'=>'required'
        ]);

        $product = new Order([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'quantity' => $request->get('quantity'),

        ]);

        $product->save();

        return redirect('/products')->with('success', 'Product saved!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $orders = Order::find($id);
        return response()->json($orders);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $orders = Order::find($id);

        return $orders;

        // return response()->json($product);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request ,$id)
    {
      $orders = Order::find($id);

      $orders->update($request->all());

      return response()->json(' Order successfully updated');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $orders = Order::find($id);
        $orders->delete();

        return response()->json('Order deleted!');
    }

    public function order_details($id){

        $orderdetails = Order_Details::all();
        return $orderdetails;


    }
}
