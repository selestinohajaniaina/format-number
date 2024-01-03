# #sujet:
# #Exercice_algo_01:

## Titre du Sujet : "Créez un Programme Expert : Formatage de Nombres Commerciaux"
## Introduction :
Dans le monde de la programmation, une tâche fréquente consiste à formater des nombres décimaux pour les présenter de manière lisible, souvent selon les conventions commerciales. Imaginez pouvoir automatiser cette tâche! Dans ce projet, nous allons explorer comment créer une fonction informatique capable de formater un nombre décimal selon des critères spécifiques. Vous pourrez choisir entre le format français (virgule comme séparateur) ou anglais (point comme séparateur), définir le nombre de chiffres après la virgule, et décider s'il faut arrondir le résultat.
## Objectif :
L'objectif principal est de développer une fonction en utilisant n'importe quel langage de programmation de votre choix. Cette fonction prendra en compte un nombre décimal, le format de chiffre (fr pour français, en pour anglais), le nombre de chiffres après la virgule, et un paramètre pour décider si le résultat doit être arrondi.
## Exemples :
1. Pour le nombre 1528.7213, en utilisant le format français avec 2 chiffres après la virgule et sans arrondi, le résultat devrait être 1.528,72.
2. Pour le nombre 65428.9761, en utilisant le format anglais avec 3 chiffres après la virgule et avec arrondi, le résultat devrait être 65,429.976.
## Consignes :
- Choisissez un langage de programmation que vous êtes à l'aise d'utiliser.
- Décomposez le problème en étapes logiques.
- Testez votre fonction avec différentes entrées pour vous assurer de sa fiabilité.
Ce projet vous permettra de développer des compétences en logique algorithmique et en résolution de problèmes tout en créant une fonction utile dans le domaine de la manipulation de données financières. Bonne programmation! 🖥️💡
Code commencement en python :

```python
    def formatNumber(number: float, format_chiffre: str = "fr", chiffres_apres_virgule: int = 2, arrondi: bool = False) -> str:
        """
        Formate un nombre décimal selon des critères spécifiques.
        Args:
        number (float): Le nombre décimal à formater.
        format_chiffre (str, optional): Le format de chiffre à utiliser, soit "fr" pour français, soit "en" pour anglais. Par défaut, "fr".
        chiffres_apres_virgule (int, optional): Le nombre de chiffres après la virgule. Par défaut, 2.
        arrondi (bool, optional): Indique si le résultat doit être arrondi. Par défaut, False.
        Returns:
        str: Le nombre formaté selon les critères spécifiés.
        """
        # Votre code ici
        return
```

# #reponse est exo_algo_01.js