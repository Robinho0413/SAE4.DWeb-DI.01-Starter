<?php

namespace App\Controller;

use App\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Movie;
use App\Entity\Type;
use App\Repository\CategoryRepository;
use App\Repository\MovieRepository;
use Symfony\Component\HttpFoundation\Request;

class ApiController extends AbstractController
{
    #[Route('/api', name: 'app_api')]
    public function index(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    #[Route('/api/movie/{id}', name: 'app_api_movie', methods:['GET'])]
    public function readMovie(Movie $mov, SerializerInterface $serializer ): Response
    {
        $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/movies', name: 'app_api_movies', methods:['GET'])]
    public function readAllMovies(MovieRepository $mov, SerializerInterface $serializer ): Response
    {
        $data = $serializer->normalize($mov->findAll(), null, ['groups' => 'json_movie']);
        $response = new JsonResponse( $data );
        return $response;
    }
    
    #[Route('/api/category/{id}', name: 'app_api_category', methods:['GET'])]
    public function readCategory(Category $cat, SerializerInterface $serializer ): Response
    {
        $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/categories', name: 'app_api_categories', methods:['GET'])]
    public function readAllCategories(CategoryRepository $cat, SerializerInterface $serializer ): Response
    {
        $data = $serializer->normalize($cat->findAll(), null, ['groups' => 'json_category']);
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/movie/type/{id}', name: 'app_api_type', methods:['GET'])]
    public function readType(MovieRepository $mov, Type $type, SerializerInterface $serializer ): Response
    {
        $movies = $mov->findBy(['type' => $type]);
        $data = $serializer->normalize($movies, null, ['groups' => 'json_movie']);
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/movies/searchContent', name: 'app_api_movie_search', methods:['GET'])]
    public function search(Request $request, MovieRepository $mov, SerializerInterface $serializer ): Response
    {
        $search = $request->query->get('search');
        $data = $serializer->normalize($mov->findByField($search), null, ['groups' => 'json_movie']);
        $response = new JsonResponse( $data );
       

        return $response;
    }

 
}
