<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $orderColumn = request('order_column', 'created_at');
        $orderDirection = request('order_direction', 'desc');

        if(! in_array($orderColumn, ['id', 'title', 'created_at'])){
            $orderColumn = 'created_at';
        }

        if( ! in_array($orderDirection, ['asc', 'desc'])) {
            $orderDirection = 'desc';
        }

        $posts = Post::with('category')
        ->orderBy($orderColumn, $orderDirection)
        ->when(request('category'), fn ($query) => $query->where('category_id', request('category')))
        ->paginate(100);
        return PostResource::collection($posts);
    }
}
