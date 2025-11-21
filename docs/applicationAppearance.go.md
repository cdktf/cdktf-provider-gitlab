# `applicationAppearance` Submodule <a name="`applicationAppearance` Submodule" id="@cdktf/provider-gitlab.applicationAppearance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationAppearance <a name="ApplicationAppearance" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance gitlab_application_appearance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/applicationappearance"

applicationappearance.NewApplicationAppearance(scope Construct, id *string, config ApplicationAppearanceConfig) ApplicationAppearance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig">ApplicationAppearanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig">ApplicationAppearanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetEmailHeaderAndFooterEnabled">ResetEmailHeaderAndFooterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetFooterMessage">ResetFooterMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetHeaderMessage">ResetHeaderMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetKeepSettingsOnDestroy">ResetKeepSettingsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMemberGuidelines">ResetMemberGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageBackgroundColor">ResetMessageBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageFontColor">ResetMessageFontColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetNewProjectGuidelines">ResetNewProjectGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetProfileImageGuidelines">ResetProfileImageGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaDescription">ResetPwaDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaName">ResetPwaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaShortName">ResetPwaShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEmailHeaderAndFooterEnabled` <a name="ResetEmailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetEmailHeaderAndFooterEnabled"></a>

```go
func ResetEmailHeaderAndFooterEnabled()
```

##### `ResetFooterMessage` <a name="ResetFooterMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetFooterMessage"></a>

```go
func ResetFooterMessage()
```

##### `ResetHeaderMessage` <a name="ResetHeaderMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetHeaderMessage"></a>

```go
func ResetHeaderMessage()
```

##### `ResetKeepSettingsOnDestroy` <a name="ResetKeepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetKeepSettingsOnDestroy"></a>

```go
func ResetKeepSettingsOnDestroy()
```

##### `ResetMemberGuidelines` <a name="ResetMemberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMemberGuidelines"></a>

```go
func ResetMemberGuidelines()
```

##### `ResetMessageBackgroundColor` <a name="ResetMessageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageBackgroundColor"></a>

```go
func ResetMessageBackgroundColor()
```

##### `ResetMessageFontColor` <a name="ResetMessageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageFontColor"></a>

```go
func ResetMessageFontColor()
```

##### `ResetNewProjectGuidelines` <a name="ResetNewProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetNewProjectGuidelines"></a>

```go
func ResetNewProjectGuidelines()
```

##### `ResetProfileImageGuidelines` <a name="ResetProfileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetProfileImageGuidelines"></a>

```go
func ResetProfileImageGuidelines()
```

##### `ResetPwaDescription` <a name="ResetPwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaDescription"></a>

```go
func ResetPwaDescription()
```

##### `ResetPwaName` <a name="ResetPwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaName"></a>

```go
func ResetPwaName()
```

##### `ResetPwaShortName` <a name="ResetPwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaShortName"></a>

```go
func ResetPwaShortName()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetTitle"></a>

```go
func ResetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/applicationappearance"

applicationappearance.ApplicationAppearance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/applicationappearance"

applicationappearance.ApplicationAppearance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/applicationappearance"

applicationappearance.ApplicationAppearance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/applicationappearance"

applicationappearance.ApplicationAppearance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApplicationAppearance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApplicationAppearance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationAppearance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabledInput">EmailHeaderAndFooterEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessageInput">FooterMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessageInput">HeaderMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroyInput">KeepSettingsOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelinesInput">MemberGuidelinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColorInput">MessageBackgroundColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColorInput">MessageFontColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelinesInput">NewProjectGuidelinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelinesInput">ProfileImageGuidelinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescriptionInput">PwaDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaNameInput">PwaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortNameInput">PwaShortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabled">EmailHeaderAndFooterEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessage">FooterMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessage">HeaderMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroy">KeepSettingsOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelines">MemberGuidelines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColor">MessageBackgroundColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColor">MessageFontColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelines">NewProjectGuidelines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelines">ProfileImageGuidelines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescription">PwaDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaName">PwaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortName">PwaShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.title">Title</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EmailHeaderAndFooterEnabledInput`<sup>Optional</sup> <a name="EmailHeaderAndFooterEnabledInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabledInput"></a>

```go
func EmailHeaderAndFooterEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FooterMessageInput`<sup>Optional</sup> <a name="FooterMessageInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessageInput"></a>

```go
func FooterMessageInput() *string
```

- *Type:* *string

---

##### `HeaderMessageInput`<sup>Optional</sup> <a name="HeaderMessageInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessageInput"></a>

```go
func HeaderMessageInput() *string
```

- *Type:* *string

---

##### `KeepSettingsOnDestroyInput`<sup>Optional</sup> <a name="KeepSettingsOnDestroyInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroyInput"></a>

```go
func KeepSettingsOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `MemberGuidelinesInput`<sup>Optional</sup> <a name="MemberGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelinesInput"></a>

```go
func MemberGuidelinesInput() *string
```

- *Type:* *string

---

##### `MessageBackgroundColorInput`<sup>Optional</sup> <a name="MessageBackgroundColorInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColorInput"></a>

```go
func MessageBackgroundColorInput() *string
```

- *Type:* *string

---

##### `MessageFontColorInput`<sup>Optional</sup> <a name="MessageFontColorInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColorInput"></a>

```go
func MessageFontColorInput() *string
```

- *Type:* *string

---

##### `NewProjectGuidelinesInput`<sup>Optional</sup> <a name="NewProjectGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelinesInput"></a>

```go
func NewProjectGuidelinesInput() *string
```

- *Type:* *string

---

##### `ProfileImageGuidelinesInput`<sup>Optional</sup> <a name="ProfileImageGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelinesInput"></a>

```go
func ProfileImageGuidelinesInput() *string
```

- *Type:* *string

---

##### `PwaDescriptionInput`<sup>Optional</sup> <a name="PwaDescriptionInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescriptionInput"></a>

```go
func PwaDescriptionInput() *string
```

- *Type:* *string

---

##### `PwaNameInput`<sup>Optional</sup> <a name="PwaNameInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaNameInput"></a>

```go
func PwaNameInput() *string
```

- *Type:* *string

---

##### `PwaShortNameInput`<sup>Optional</sup> <a name="PwaShortNameInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortNameInput"></a>

```go
func PwaShortNameInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EmailHeaderAndFooterEnabled`<sup>Required</sup> <a name="EmailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabled"></a>

```go
func EmailHeaderAndFooterEnabled() interface{}
```

- *Type:* interface{}

---

##### `FooterMessage`<sup>Required</sup> <a name="FooterMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessage"></a>

```go
func FooterMessage() *string
```

- *Type:* *string

---

##### `HeaderMessage`<sup>Required</sup> <a name="HeaderMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessage"></a>

```go
func HeaderMessage() *string
```

- *Type:* *string

---

##### `KeepSettingsOnDestroy`<sup>Required</sup> <a name="KeepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroy"></a>

```go
func KeepSettingsOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `MemberGuidelines`<sup>Required</sup> <a name="MemberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelines"></a>

```go
func MemberGuidelines() *string
```

- *Type:* *string

---

##### `MessageBackgroundColor`<sup>Required</sup> <a name="MessageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColor"></a>

```go
func MessageBackgroundColor() *string
```

- *Type:* *string

---

##### `MessageFontColor`<sup>Required</sup> <a name="MessageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColor"></a>

```go
func MessageFontColor() *string
```

- *Type:* *string

---

##### `NewProjectGuidelines`<sup>Required</sup> <a name="NewProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelines"></a>

```go
func NewProjectGuidelines() *string
```

- *Type:* *string

---

##### `ProfileImageGuidelines`<sup>Required</sup> <a name="ProfileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelines"></a>

```go
func ProfileImageGuidelines() *string
```

- *Type:* *string

---

##### `PwaDescription`<sup>Required</sup> <a name="PwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescription"></a>

```go
func PwaDescription() *string
```

- *Type:* *string

---

##### `PwaName`<sup>Required</sup> <a name="PwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaName"></a>

```go
func PwaName() *string
```

- *Type:* *string

---

##### `PwaShortName`<sup>Required</sup> <a name="PwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortName"></a>

```go
func PwaShortName() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationAppearanceConfig <a name="ApplicationAppearanceConfig" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/applicationappearance"

&applicationappearance.ApplicationAppearanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	EmailHeaderAndFooterEnabled: interface{},
	FooterMessage: *string,
	HeaderMessage: *string,
	KeepSettingsOnDestroy: interface{},
	MemberGuidelines: *string,
	MessageBackgroundColor: *string,
	MessageFontColor: *string,
	NewProjectGuidelines: *string,
	ProfileImageGuidelines: *string,
	PwaDescription: *string,
	PwaName: *string,
	PwaShortName: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.description">Description</a></code> | <code>*string</code> | Markdown text shown on the sign-in and sign-up page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.emailHeaderAndFooterEnabled">EmailHeaderAndFooterEnabled</a></code> | <code>interface{}</code> | Add header and footer to all outgoing emails if enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.footerMessage">FooterMessage</a></code> | <code>*string</code> | Message in the system footer bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.headerMessage">HeaderMessage</a></code> | <code>*string</code> | Message in the system header bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.keepSettingsOnDestroy">KeepSettingsOnDestroy</a></code> | <code>interface{}</code> | Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.memberGuidelines">MemberGuidelines</a></code> | <code>*string</code> | Markdown text shown on the group or project member page for users with permission to change members. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageBackgroundColor">MessageBackgroundColor</a></code> | <code>*string</code> | Background color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageFontColor">MessageFontColor</a></code> | <code>*string</code> | Font color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.newProjectGuidelines">NewProjectGuidelines</a></code> | <code>*string</code> | Markdown text shown on the new project page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.profileImageGuidelines">ProfileImageGuidelines</a></code> | <code>*string</code> | Markdown text shown on the profile page below the Public Avatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaDescription">PwaDescription</a></code> | <code>*string</code> | An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaName">PwaName</a></code> | <code>*string</code> | Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaShortName">PwaShortName</a></code> | <code>*string</code> | Short name for Progressive Web App. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.title">Title</a></code> | <code>*string</code> | Application title on the sign-in and sign-up page. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Markdown text shown on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#description ApplicationAppearance#description}

---

##### `EmailHeaderAndFooterEnabled`<sup>Optional</sup> <a name="EmailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.emailHeaderAndFooterEnabled"></a>

```go
EmailHeaderAndFooterEnabled interface{}
```

- *Type:* interface{}

Add header and footer to all outgoing emails if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#email_header_and_footer_enabled ApplicationAppearance#email_header_and_footer_enabled}

---

##### `FooterMessage`<sup>Optional</sup> <a name="FooterMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.footerMessage"></a>

```go
FooterMessage *string
```

- *Type:* *string

Message in the system footer bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#footer_message ApplicationAppearance#footer_message}

---

##### `HeaderMessage`<sup>Optional</sup> <a name="HeaderMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.headerMessage"></a>

```go
HeaderMessage *string
```

- *Type:* *string

Message in the system header bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#header_message ApplicationAppearance#header_message}

---

##### `KeepSettingsOnDestroy`<sup>Optional</sup> <a name="KeepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.keepSettingsOnDestroy"></a>

```go
KeepSettingsOnDestroy interface{}
```

- *Type:* interface{}

Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#keep_settings_on_destroy ApplicationAppearance#keep_settings_on_destroy}

---

##### `MemberGuidelines`<sup>Optional</sup> <a name="MemberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.memberGuidelines"></a>

```go
MemberGuidelines *string
```

- *Type:* *string

Markdown text shown on the group or project member page for users with permission to change members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#member_guidelines ApplicationAppearance#member_guidelines}

---

##### `MessageBackgroundColor`<sup>Optional</sup> <a name="MessageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageBackgroundColor"></a>

```go
MessageBackgroundColor *string
```

- *Type:* *string

Background color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#message_background_color ApplicationAppearance#message_background_color}

---

##### `MessageFontColor`<sup>Optional</sup> <a name="MessageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageFontColor"></a>

```go
MessageFontColor *string
```

- *Type:* *string

Font color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#message_font_color ApplicationAppearance#message_font_color}

---

##### `NewProjectGuidelines`<sup>Optional</sup> <a name="NewProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.newProjectGuidelines"></a>

```go
NewProjectGuidelines *string
```

- *Type:* *string

Markdown text shown on the new project page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#new_project_guidelines ApplicationAppearance#new_project_guidelines}

---

##### `ProfileImageGuidelines`<sup>Optional</sup> <a name="ProfileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.profileImageGuidelines"></a>

```go
ProfileImageGuidelines *string
```

- *Type:* *string

Markdown text shown on the profile page below the Public Avatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#profile_image_guidelines ApplicationAppearance#profile_image_guidelines}

---

##### `PwaDescription`<sup>Optional</sup> <a name="PwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaDescription"></a>

```go
PwaDescription *string
```

- *Type:* *string

An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#pwa_description ApplicationAppearance#pwa_description}

---

##### `PwaName`<sup>Optional</sup> <a name="PwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaName"></a>

```go
PwaName *string
```

- *Type:* *string

Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#pwa_name ApplicationAppearance#pwa_name}

---

##### `PwaShortName`<sup>Optional</sup> <a name="PwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaShortName"></a>

```go
PwaShortName *string
```

- *Type:* *string

Short name for Progressive Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#pwa_short_name ApplicationAppearance#pwa_short_name}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Application title on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/application_appearance#title ApplicationAppearance#title}

---



