<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends Controller
{
    /**
     * @Route("/", name="app")
     */
    public function index()
    {
        return $this->render('app/index.html.twig', [
            'js' => file_get_contents($this->get('kernel')->getProjectDir() . "/assets/js/dynamic-table.js"),
            'appjs' => file_get_contents($this->get('kernel')->getProjectDir() . "/assets/js/app.js"),
            'controller_name' => 'AppController',
        ]);
    }
}
