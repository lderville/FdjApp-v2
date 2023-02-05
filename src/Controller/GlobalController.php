<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
#[Route('/global')]
class GlobalController extends AbstractController
{
    #[Route('/Home', name: 'app_global')]
    public function index(): Response
    {
        return $this->render('global/index.html.twig', [
            'controller_name' => 'GlobalController',
        ]);
    }
}
