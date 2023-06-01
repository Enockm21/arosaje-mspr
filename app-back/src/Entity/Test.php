<?php

namespace App\Entity;

use App\Repository\TestRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TestRepository::class)
 */
class Test
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="blob")
     */
    private $images;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImages()
    {
        return $this->images;
    }

    public function setImages($images): self
    {
        $this->images = $images;

        return $this;
    }
}
