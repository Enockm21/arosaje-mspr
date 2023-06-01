<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiLoginController extends AbstractController
{
    /**
     * @Route("/api/login",methods={"POST"}, name="app_api_login")
     */
    public function login()
    {


        $user = $this->getUser();

        return $this->json([
            'username'  => $user->getUserIdentifier(),
            'roles' => $user->getRoles(),
        ]);
    }
}


//dd($request);
        // $user=$security->getUser();
        // if (null === $user) {
        //  return $this->json([
        //                    'message' => 'missing credentials',
        // ], Response::HTTP_UNAUTHORIZED);
        // }
        
        //$token='zeze';
// return $this->json([
        //     'user'  => $user->getUserIdentifier(),
        //     'token' => $token,
        // ]);
        // dd($request);