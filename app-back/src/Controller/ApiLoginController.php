<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\User;

class ApiLoginController extends AbstractController
{
    /**
     * @Route("/api/login",methods={"POST"}, name="app_api_login")
     */
    public function login()
    {


        $user = $this->getUser();
        return $this->json([
            'merde'=> "cool"
        ]);
       /*  return $this->json([
            'username'  => $user->getUserIdentifier(),
            'id'  => $userEntity->getId(),
            'roles' => $user->getRoles(),
        ]); */
    }
}
