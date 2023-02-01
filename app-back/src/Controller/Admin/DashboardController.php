<?php

namespace App\Controller\Admin;

use App\Entity\Plantes;
use App\Controller\Admin\UserCrudController;
use Symfony\Component\HttpFoundation\Response;
use App\Controller\Admin\PlantesCrudController;
use App\Entity\Advices;
use App\Entity\User;
use Symfony\Component\Routing\Annotation\Route;

use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController

{
    // public function __construct(private AdminUrlGenerator $adminUrlGenerator)
    // {

    // }
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {

        $routeBuilder = $this->get(AdminUrlGenerator::class);

        return $this->redirect($routeBuilder->setController(PlantesCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Arosaje Admin');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
        yield MenuItem::section('Plantes');
        yield MenuItem::subMenu('Actions')
            ->setSubItems([
                MenuItem::linkToCrud('Voir les plantes', 'fas fa-eye', Plantes::class),
                MenuItem::linkToCrud('Add Plantes', 'fas fa-plus', Plantes::class)
                    ->setAction(Crud::PAGE_NEW),
            ]);
        yield MenuItem::section('Conseils');

        yield MenuItem::subMenu('Actions')
            ->setSubItems([
                MenuItem::linkToCrud('Voir les conseils', 'fas fa-eye', Advices::class),
                MenuItem::linkToCrud('Add Plantes', 'fas fa-plus', Advices::class)
                    ->setAction(Crud::PAGE_NEW),
            ]);
        yield MenuItem::section('Users');

        yield MenuItem::subMenu('Actions')
            ->setSubItems([
                MenuItem::linkToCrud('Voir les utilisateurs', 'fas fa-eye', User::class),
                MenuItem::linkToCrud('Add Plantes', 'fas fa-plus', User::class)
                    ->setAction(Crud::PAGE_NEW),
            ]);
    }
}
