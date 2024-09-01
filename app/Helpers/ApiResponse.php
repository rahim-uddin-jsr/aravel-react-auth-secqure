<?php

namespace App\Helpers;

class ApiResponse
{
    public static function success($data = [], $message = 'Operation successful')
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ]);
    }

    public static function error($message = 'Operation failed', $errors = [], $code = 400)
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
        ], $code);
    }
}
