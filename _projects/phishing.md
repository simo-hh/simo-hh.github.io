---
layout: page
title: Phishing Detection
description: The research project examines the effectiveness and robustness of visual similarity-based phishing detection models using a dataset of 450,000 real-world phishing websites.
img: assets/img/phishing/phishing_home.png
importance: 2
category: work
related_publications: liu2022inferring, abdelnabi2020visualphishnet, lin2021phishpedia, afroz2011phishzoo, ji2024evaluatingeffectivenessrobustnessvisual
giscus_comments: true
---

This project focuses on evaluating the effectiveness and robustness of visual similarity-based phishing detection models by analyzing a dataset of 450,000 real-world phishing websites. The study identifies performance discrepancies among various models and investigates their vulnerabilities to adversarial attacks, particularly those that manipulate visual elements like logos. By comprehensively examining these models, the research underscores the importance of real-world evaluations to enhance the reliability of phishing detection systems.

For the experiment of the phishing research, we collect a real-world phishing dataset (i.e., screenshots and HTML files) with URLs from APWG eCX at the benignning. Then, we refine the dataset by filtering out the pages that involve errors (e.g., HTTP 404) or CAPTCHA. Note that we use the APWG dataset for testing model purpose alone. Second, we prepare two additional datasets: the baseline from combining PhishIntention {% cite liu2022inferring %} with VisualPhishNet {% cite abdelnabi2020visualphishnet %} and the extended one with more reference brand. Next, we carefully select six state-of-the-art visual similarity-based anti-phishing techniques and re-train them with these datasets. Third, we systematically evaluate the models with the APWG dataset. Lastly, we manipulate visual components (e.g., logo images) with varying transformations, assessing the
robustness of the above models.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/phishing/overview.png" title="overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This figure illustrates the overview of the experiment.
</div>

Table below showcases our innovative approach to processing the dataset through a series of visible manipulation techniques and perturbation-based adversarial attacks. This methodology reflects real-world phishing tactics, allowing us to generate a diverse set of adversarial samples that challenge the detection models. The manipulations include alterations to visual components such as logos and layout, providing a comprehensive assessment of how well the models can withstand sophisticated evasion strategies.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/phishing/manipulation.png" title="manipulation example" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This table shows example and description of visible manipulation methods.
</div>

Moreover, I also re-implemented several cutting-edge phishing detection models, including Phishpedia {% cite lin2021phishpedia %}, PhishIntention {% cite liu2022inferring %}, and PhishZoo {% cite afroz2011phishzoo %}. The results indicate that while these models performed well in controlled settings, they significantly underperformed against real-world phishing samples. These findings reveal critical areas for improvement and highlight the necessity of continuously updating models to adapt to evolving phishing tactics.

If you want to reference our work or read the paper {% cite ji2024evaluatingeffectivenessrobustnessvisual %} for the detail, you can use and check the following BibTeX citation:
{% raw %}

```bibtex
@misc{ji2024evaluatingeffectivenessrobustnessvisual,
      title={Evaluating the Effectiveness and Robustness of Visual Similarity-based Phishing Detection Models},
      author={Fujiao Ji and Kiho Lee and Hyungjoon Koo and Wenhao You and Euijin Choo and Hyoungshick Kim and Doowon Kim},
      year={2024},
      eprint={2405.19598},
      archivePrefix={arXiv},
      primaryClass={cs.CR},
      url={https://arxiv.org/abs/2405.19598},
}
```

{% endraw %}
