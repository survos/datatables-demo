<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/", name="app")
     */
    public function index(string $projectDir)
    {
        return $this->render('app/index.html.twig', [
            'js' => file_get_contents($projectDir. "/assets/js/dynamic-table.js"),
            'appjs' => file_get_contents($projectDir . "/assets/js/app.js"),
            'controller_name' => 'AppController',
        ]);
    }
}
