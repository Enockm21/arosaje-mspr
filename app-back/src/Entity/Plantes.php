<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PlantesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PlantesRepository::class)
 * @ApiResource()
 */
class Plantes
{ 
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="plantes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=500)
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="plante_kept")
     */
    private $plant_caretaker_user;

    /**
     * @ORM\Column(type="text", length=255)
     */
    private $image;

    /**
     * @ORM\OneToMany(targetEntity=Advices::class, mappedBy="plante", orphanRemoval=true)
     */
    private $advices;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $amount;

    /**
     * @ORM\Column(type="datetime")
     */
    private $start_date;

    /**
     * @ORM\Column(type="datetime")
     */
    private $end_date;

    public function __construct()
    {
        $this->advices = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPlantCaretakerUser(): ?User
    {
        return $this->plant_caretaker_user;
    }

    public function setPlantCaretakerUser(?User $plant_caretaker_user): self
    {
        $this->plant_caretaker_user = $plant_caretaker_user;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

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
            $advice->setPlante($this);
        }

        return $this;
    }

    public function removeAdvice(Advices $advice): self
    {
        if ($this->advices->removeElement($advice)) {
            // set the owning side to null (unless already changed)
            if ($advice->getPlante() === $this) {
                $advice->setPlante(null);
            }
        }

        return $this;
    }

    public function getAmount(): ?string
    {
        return $this->amount;
    }

    public function setAmount(string $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->start_date;
    }

    public function setStartDate(\DateTimeInterface $start_date): self
    {
        $this->start_date = $start_date;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->end_date;
    }

    public function setEndDate(\DateTimeInterface $end_date): self
    {
        $this->end_date = $end_date;

        return $this;
    }
}
