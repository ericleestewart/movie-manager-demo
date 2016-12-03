<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Retrieve all the movies.
        $movies = \App\Movie::all();

        // Format the response.
        return response()->json(["data" => $movies]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Create the movie.
        $movie = new \App\Movie($request->all());
        $movie->save();

        // Format the response.
        return response()->json(["data" => $movie], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Get the movie.
        $movie = \App\Movie::find($id);

        // Determine the status code.
        $statusCode = $movie ? 200 : 404;

        // Format the response.
        return response()->json(["data" => $movie], $statusCode);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Get the movie.
        $movie = \App\Movie::find($id);

        // If no resources was found.
        if (!$movie) {
            return response()->json(["data" => $movie], 404);
        }

        // Update the movie.
        $movie->update($request->all());

        // Format the response.
        return response()->json(["data" => $movie]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
                // Get the movie.
        $movie = \App\Movie::find($id);

        // If no resources was found.
        if (!$movie) {
            return response()->json(["data" => $movie], 404);
        }

        // Update the movie.
        $movie->delete();

        // Format the response.
        return response()->json(["data" => $movie]);

    }
}
