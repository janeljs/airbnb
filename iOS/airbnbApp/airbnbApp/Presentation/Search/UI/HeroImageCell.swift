//
//  HeroImageCell.swift
//  airbnbApp
//
//  Created by zombietux on 2021/05/17.
//

import UIKit

class HeroImageCell: UICollectionViewCell {
    static let reuseIdentifier = "HeroImageCell"
    
    private let imageView = UIImageView()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureUI()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureUI()
    }
    
    private func configureUI() {
        imageView.contentMode = .scaleAspectFill
        contentView.addSubview(imageView)
        imageView.backgroundColor = .blue
        
        NSLayoutConstraint.activate([
            imageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 8),
            imageView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: 0),
            imageView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: 0),
            imageView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8)
        ])
    }
}
