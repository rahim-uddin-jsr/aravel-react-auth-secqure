<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Models\Post;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostCollection;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return new PostCollection(Post::all());
    }

    public function store(Request $request)
    {
        try {
            $post = Post::create($request->all());

            return ApiResponse::success(new PostResource($post), 'Post created successfully');
        } catch (\Exception $e) {
            return ApiResponse::error('Post creation failed', ['error' => $e->getMessage()]);
        }
    }

    public function show(Post $post)
    {
        return new PostResource($post);
    }

    public function update(Request $request, Post $post)
    {
        $post->update($request->validate([
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required|string',
        ]));

        return new PostResource($post);
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json(['message' => 'Post deleted successfully']);
    }
}
