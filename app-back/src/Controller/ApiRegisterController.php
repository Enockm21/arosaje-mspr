<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class ApiRegisterController extends AbstractController
{
    /**
     * @Route("/api/register", methods={"POST"}, name="app_api_register")
     */
    public function index(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): JsonResponse
    {
       try {
            $data = json_decode($request->getContent(), true) ;
            return new JsonResponse(['message' => 'User created!',"data"=> $data]);

            $user = new User();
            $user->setFistName($data['first_name']);
            $user->setLastName($data['last_name']);
            $user->setPseudo($data['pseudo']);
            $user->setEmail($data['email']);
            $user->setAdress($data['adress']);
            $hashedPassword = $userPasswordHasher->hashPassword($user, $data['password']);
            $user->setPassword($hashedPassword);
            $entityManager->persist($user);
            $entityManager->flush();
        return new JsonResponse(['message' => 'User created!']);
       } catch (\Exception $e) {
         throw $e;
       }
        
        
    }
}
