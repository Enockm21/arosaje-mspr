<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


class ApiRegisterController extends AbstractController
{
    /**
     * @Route("/api/register", methods={"POST"}, name="app_api_register")
     */
    public function index(Request $request): JsonResponse
    {
        $request->request->get('name');
        
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/ApiRegisterController.php',
        ]);
    }
}
