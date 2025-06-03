// https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/group_badge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupBadgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or URL-encoded path of the group to add the badge to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/group_badge#group GroupBadge#group}
  */
  readonly group: string;
  /**
  * The image url which will be presented on group overview.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/group_badge#image_url GroupBadge#image_url}
  */
  readonly imageUrl: string;
  /**
  * The url linked with the badge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/group_badge#link_url GroupBadge#link_url}
  */
  readonly linkUrl: string;
  /**
  * The name of the badge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/group_badge#name GroupBadge#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/group_badge gitlab_group_badge}
*/
export class GroupBadge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_badge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupBadge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupBadge to import
  * @param importFromId The id of the existing GroupBadge that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/group_badge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupBadge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_badge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/resources/group_badge gitlab_group_badge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupBadgeConfig
  */
  public constructor(scope: Construct, id: string, config: GroupBadgeConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_badge',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.0.0',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._imageUrl = config.imageUrl;
    this._linkUrl = config.linkUrl;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_url - computed: false, optional: false, required: true
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // link_url - computed: false, optional: false, required: true
  private _linkUrl?: string; 
  public get linkUrl() {
    return this.getStringAttribute('link_url');
  }
  public set linkUrl(value: string) {
    this._linkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUrlInput() {
    return this._linkUrl;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rendered_image_url - computed: true, optional: false, required: false
  public get renderedImageUrl() {
    return this.getStringAttribute('rendered_image_url');
  }

  // rendered_link_url - computed: true, optional: false, required: false
  public get renderedLinkUrl() {
    return this.getStringAttribute('rendered_link_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      link_url: cdktf.stringToTerraform(this._linkUrl),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_url: {
        value: cdktf.stringToHclTerraform(this._imageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_url: {
        value: cdktf.stringToHclTerraform(this._linkUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
