//
//  CategoryCell.swift
//  airbnbApp
//
//  Created by zombietux on 2021/05/17.
//

import UIKit

class CategoryCell: UICollectionViewCell {
    static let reuseIdentifier = "CategoryCell"
    
    let titleLabel = UILabel()
    let imageView = UIImageView()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureUI()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configureUI()
    }
    
    private func configureUI() {
        titleLabel.numberOfLines = 2
        
        let horizontalStack = UIStackView(arrangedSubviews: [imageView, titleLabel])
        horizontalStack.axis = .horizontal
        horizontalStack.spacing = 10
        
        contentView.addSubview(horizontalStack)
        horizontalStack.translatesAutoresizingMaskIntoConstraints = false
        
        let imageWidthConstraint = imageView.widthAnchor.constraint(equalToConstant: 200)
        imageWidthConstraint.priority = .defaultHigh + 1
        
        NSLayoutConstraint.activate([
            imageWidthConstraint,
            imageView.heightAnchor.constraint(equalTo: imageView.widthAnchor, multiplier: 1.4),
            horizontalStack.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 8),
            horizontalStack.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: 0),
            horizontalStack.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: 0),
            horizontalStack.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8)
        ])
    }
}
