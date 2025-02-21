# `projectJobTokenScopes` Submodule <a name="`projectJobTokenScopes` Submodule" id="@cdktf/provider-gitlab.projectJobTokenScopes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectJobTokenScopes <a name="ProjectJobTokenScopes" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_job_token_scopes gitlab_project_job_token_scopes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectjobtokenscopes"

projectjobtokenscopes.NewProjectJobTokenScopes(scope Construct, id *string, config ProjectJobTokenScopesConfig) ProjectJobTokenScopes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig">ProjectJobTokenScopesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig">ProjectJobTokenScopesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetGroupIds">ResetTargetGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetProjectIds">ResetTargetProjectIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTargetGroupIds` <a name="ResetTargetGroupIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetGroupIds"></a>

```go
func ResetTargetGroupIds()
```

##### `ResetTargetProjectIds` <a name="ResetTargetProjectIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetProjectIds"></a>

```go
func ResetTargetProjectIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectJobTokenScopes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectjobtokenscopes"

projectjobtokenscopes.ProjectJobTokenScopes_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectjobtokenscopes"

projectjobtokenscopes.ProjectJobTokenScopes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectjobtokenscopes"

projectjobtokenscopes.ProjectJobTokenScopes_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectjobtokenscopes"

projectjobtokenscopes.ProjectJobTokenScopes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectJobTokenScopes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectJobTokenScopes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectJobTokenScopes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_job_token_scopes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectJobTokenScopes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectIdInput">ProjectIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIdsInput">TargetGroupIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIdsInput">TargetProjectIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectId">ProjectId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIds">TargetGroupIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIds">TargetProjectIds</a></code> | <code>*[]*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectIdInput"></a>

```go
func ProjectIdInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TargetGroupIdsInput`<sup>Optional</sup> <a name="TargetGroupIdsInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIdsInput"></a>

```go
func TargetGroupIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `TargetProjectIdsInput`<sup>Optional</sup> <a name="TargetProjectIdsInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIdsInput"></a>

```go
func TargetProjectIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectId"></a>

```go
func ProjectId() *f64
```

- *Type:* *f64

---

##### `TargetGroupIds`<sup>Required</sup> <a name="TargetGroupIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIds"></a>

```go
func TargetGroupIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `TargetProjectIds`<sup>Required</sup> <a name="TargetProjectIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIds"></a>

```go
func TargetProjectIds() *[]*f64
```

- *Type:* *[]*f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectJobTokenScopesConfig <a name="ProjectJobTokenScopesConfig" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectjobtokenscopes"

&projectjobtokenscopes.ProjectJobTokenScopesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	ProjectId: *f64,
	TargetGroupIds: *[]*f64,
	TargetProjectIds: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.project">Project</a></code> | <code>*string</code> | The ID or full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.projectId">ProjectId</a></code> | <code>*f64</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetGroupIds">TargetGroupIds</a></code> | <code>*[]*f64</code> | A set of group IDs that are in the CI/CD job token inbound allowlist. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetProjectIds">TargetProjectIds</a></code> | <code>*[]*f64</code> | A set of project IDs that are in the CI/CD job token inbound allowlist. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_job_token_scopes#project ProjectJobTokenScopes#project}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.projectId"></a>

```go
ProjectId *f64
```

- *Type:* *f64

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_job_token_scopes#project_id ProjectJobTokenScopes#project_id}

---

##### `TargetGroupIds`<sup>Optional</sup> <a name="TargetGroupIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetGroupIds"></a>

```go
TargetGroupIds *[]*f64
```

- *Type:* *[]*f64

A set of group IDs that are in the CI/CD job token inbound allowlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_job_token_scopes#target_group_ids ProjectJobTokenScopes#target_group_ids}

---

##### `TargetProjectIds`<sup>Optional</sup> <a name="TargetProjectIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetProjectIds"></a>

```go
TargetProjectIds *[]*f64
```

- *Type:* *[]*f64

A set of project IDs that are in the CI/CD job token inbound allowlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_job_token_scopes#target_project_ids ProjectJobTokenScopes#target_project_ids}

---



