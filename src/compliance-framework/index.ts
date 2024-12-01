// https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/compliance_framework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComplianceFrameworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * New color representation of the compliance framework in hex format. e.g. #FCA121.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/compliance_framework#color ComplianceFramework#color}
  */
  readonly color: string;
  /**
  * Set this compliance framework as the default framework for the group. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/compliance_framework#default ComplianceFramework#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Description for the compliance framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/compliance_framework#description ComplianceFramework#description}
  */
  readonly description: string;
  /**
  * Name for the compliance framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/compliance_framework#name ComplianceFramework#name}
  */
  readonly name: string;
  /**
  * Full path of the namespace to add the compliance framework to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/compliance_framework#namespace_path ComplianceFramework#namespace_path}
  */
  readonly namespacePath: string;
  /**
  * Full path of the compliance pipeline configuration stored in a project repository, such as `.gitlab/.compliance-gitlab-ci.yml@compliance/hipaa`. Required format: `path/file.y[a]ml@group-name/project-name` **Note**: Ultimate license required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/compliance_framework#pipeline_configuration_full_path ComplianceFramework#pipeline_configuration_full_path}
  */
  readonly pipelineConfigurationFullPath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/compliance_framework gitlab_compliance_framework}
*/
export class ComplianceFramework extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_compliance_framework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComplianceFramework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComplianceFramework to import
  * @param importFromId The id of the existing ComplianceFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/compliance_framework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComplianceFramework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_compliance_framework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/compliance_framework gitlab_compliance_framework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComplianceFrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: ComplianceFrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_compliance_framework',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.6.1',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._default = config.default;
    this._description = config.description;
    this._name = config.name;
    this._namespacePath = config.namespacePath;
    this._pipelineConfigurationFullPath = config.pipelineConfigurationFullPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // framework_id - computed: true, optional: false, required: false
  public get frameworkId() {
    return this.getStringAttribute('framework_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace_path - computed: false, optional: false, required: true
  private _namespacePath?: string; 
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }
  public set namespacePath(value: string) {
    this._namespacePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacePathInput() {
    return this._namespacePath;
  }

  // pipeline_configuration_full_path - computed: false, optional: true, required: false
  private _pipelineConfigurationFullPath?: string; 
  public get pipelineConfigurationFullPath() {
    return this.getStringAttribute('pipeline_configuration_full_path');
  }
  public set pipelineConfigurationFullPath(value: string) {
    this._pipelineConfigurationFullPath = value;
  }
  public resetPipelineConfigurationFullPath() {
    this._pipelineConfigurationFullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigurationFullPathInput() {
    return this._pipelineConfigurationFullPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      namespace_path: cdktf.stringToTerraform(this._namespacePath),
      pipeline_configuration_full_path: cdktf.stringToTerraform(this._pipelineConfigurationFullPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      namespace_path: {
        value: cdktf.stringToHclTerraform(this._namespacePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_configuration_full_path: {
        value: cdktf.stringToHclTerraform(this._pipelineConfigurationFullPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
