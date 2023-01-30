<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @ORM\Column(type="string", length=180, unique=false)
     */
    public $first_name;

    /**
     * @ORM\Column(type="string", length=180, unique=false)
     */
    private $last_name;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $pseudo;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\OneToMany(targetEntity=Plantes::class, mappedBy="user_id", orphanRemoval=true)
     */
    private $plantes;

    /**
     * @ORM\OneToMany(targetEntity=Plantes::class, mappedBy="plant_caretaker_user")
     */
    private $plante_kept;

    /**
     * @ORM\OneToMany(targetEntity=Advices::class, mappedBy="user", orphanRemoval=true)
     */
    private $advices;

    public function __construct()
    {
        $this->plantes = new ArrayCollection();
        $this->plante_kept = new ArrayCollection();
        $this->advices = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function getFistName(): ?string
    {
        return $this->first_name;
    }
    public function getLastName(): ?string
    {
        return $this->last_name;
    }
    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }
    public function setFistName(string $first_name): self
    {
        $this->first_name = $first_name;

        return $this;
    }
    public function setLastName(string $last_name): self
    {
        $this->last_name = $last_name;

        return $this;
    }
    public function setPseudo(string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }


    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @deprecated since Symfony 5.3, use getUserIdentifier instead
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
    // public function __toString(): string
    // {
    //     return $this->roles;
    // }

    /**
     * @return Collection<int, Plantes>
     */
    public function getPlantes(): Collection
    {
        return $this->plantes;
    }

    public function addPlante(Plantes $plante): self
    {
        if (!$this->plantes->contains($plante)) {
            $this->plantes[] = $plante;
            $plante->setUserId($this);
        }

        return $this;
    }

    public function removePlante(Plantes $plante): self
    {
        if ($this->plantes->removeElement($plante)) {
            // set the owning side to null (unless already changed)
            if ($plante->getUserId() === $this) {
                $plante->setUserId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Plantes>
     */
    public function getPlanteKept(): Collection
    {
        return $this->plante_kept;
    }

    public function addPlanteKept(Plantes $planteKept): self
    {
        if (!$this->plante_kept->contains($planteKept)) {
            $this->plante_kept[] = $planteKept;
            $planteKept->setPlantCaretakerUser($this);
        }

        return $this;
    }

    public function removePlanteKept(Plantes $planteKept): self
    {
        if ($this->plante_kept->removeElement($planteKept)) {
            // set the owning side to null (unless already changed)
            if ($planteKept->getPlantCaretakerUser() === $this) {
                $planteKept->setPlantCaretakerUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Advices>
     */
    public function getAdvices(): Collection
    {
        return $this->advices;
    }

    public function addAdvice(Advices $advice): self
    {
        if (!$this->advices->contains($advice)) {
            $this->advices[] = $advice;
            $advice->setUser($this);
        }

        return $this;
    }

    public function removeAdvice(Advices $advice): self
    {
        if ($this->advices->removeElement($advice)) {
            // set the owning side to null (unless already changed)
            if ($advice->getUser() === $this) {
                $advice->setUser(null);
            }
        }

        return $this;
    }
}
