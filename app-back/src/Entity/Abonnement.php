<?php

namespace App\Entity;

use App\Repository\AbonnementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AbonnementRepository::class)
 */
class Abonnement
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, inversedBy="abonnements")
     */
    private $user_id;

    /**
     * @ORM\ManyToMany(targetEntity=User::class)
     */
    private $following_id;

    public function __construct()
    {
        $this->user_id = new ArrayCollection();
        $this->following_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUserId(): Collection
    {
        return $this->user_id;
    }

    public function addUserId(User $userId): self
    {
        if (!$this->user_id->contains($userId)) {
            $this->user_id[] = $userId;
        }

        return $this;
    }

    public function removeUserId(User $userId): self
    {
        $this->user_id->removeElement($userId);

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getFollowingId(): Collection
    {
        return $this->following_id;
    }

    public function addFollowingId(User $followingId): self
    {
        if (!$this->following_id->contains($followingId)) {
            $this->following_id[] = $followingId;
        }

        return $this;
    }

    public function removeFollowingId(User $followingId): self
    {
        $this->following_id->removeElement($followingId);

        return $this;
    }
}
