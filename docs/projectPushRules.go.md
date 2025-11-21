# `projectPushRules` Submodule <a name="`projectPushRules` Submodule" id="@cdktf/provider-gitlab.projectPushRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectPushRulesA <a name="ProjectPushRulesA" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules gitlab_project_push_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectpushrules"

projectpushrules.NewProjectPushRulesA(scope Construct, id *string, config ProjectPushRulesAConfig) ProjectPushRulesA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig">ProjectPushRulesAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig">ProjectPushRulesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetAuthorEmailRegex">ResetAuthorEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetBranchNameRegex">ResetBranchNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterCheck">ResetCommitCommitterCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterNameCheck">ResetCommitCommitterNameCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageNegativeRegex">ResetCommitMessageNegativeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageRegex">ResetCommitMessageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetDenyDeleteTag">ResetDenyDeleteTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetFileNameRegex">ResetFileNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMemberCheck">ResetMemberCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetPreventSecrets">ResetPreventSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectNonDcoCommits">ResetRejectNonDcoCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectUnsignedCommits">ResetRejectUnsignedCommits</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAuthorEmailRegex` <a name="ResetAuthorEmailRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetAuthorEmailRegex"></a>

```go
func ResetAuthorEmailRegex()
```

##### `ResetBranchNameRegex` <a name="ResetBranchNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetBranchNameRegex"></a>

```go
func ResetBranchNameRegex()
```

##### `ResetCommitCommitterCheck` <a name="ResetCommitCommitterCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterCheck"></a>

```go
func ResetCommitCommitterCheck()
```

##### `ResetCommitCommitterNameCheck` <a name="ResetCommitCommitterNameCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterNameCheck"></a>

```go
func ResetCommitCommitterNameCheck()
```

##### `ResetCommitMessageNegativeRegex` <a name="ResetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageNegativeRegex"></a>

```go
func ResetCommitMessageNegativeRegex()
```

##### `ResetCommitMessageRegex` <a name="ResetCommitMessageRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageRegex"></a>

```go
func ResetCommitMessageRegex()
```

##### `ResetDenyDeleteTag` <a name="ResetDenyDeleteTag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetDenyDeleteTag"></a>

```go
func ResetDenyDeleteTag()
```

##### `ResetFileNameRegex` <a name="ResetFileNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetFileNameRegex"></a>

```go
func ResetFileNameRegex()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetMemberCheck` <a name="ResetMemberCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMemberCheck"></a>

```go
func ResetMemberCheck()
```

##### `ResetPreventSecrets` <a name="ResetPreventSecrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetPreventSecrets"></a>

```go
func ResetPreventSecrets()
```

##### `ResetRejectNonDcoCommits` <a name="ResetRejectNonDcoCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectNonDcoCommits"></a>

```go
func ResetRejectNonDcoCommits()
```

##### `ResetRejectUnsignedCommits` <a name="ResetRejectUnsignedCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectUnsignedCommits"></a>

```go
func ResetRejectUnsignedCommits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectPushRulesA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectpushrules"

projectpushrules.ProjectPushRulesA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectpushrules"

projectpushrules.ProjectPushRulesA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectpushrules"

projectpushrules.ProjectPushRulesA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectpushrules"

projectpushrules.ProjectPushRulesA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectPushRulesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectPushRulesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectPushRulesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectPushRulesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegexInput">AuthorEmailRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegexInput">BranchNameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheckInput">CommitCommitterCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheckInput">CommitCommitterNameCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegexInput">CommitMessageNegativeRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegexInput">CommitMessageRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTagInput">DenyDeleteTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegexInput">FileNameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheckInput">MemberCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecretsInput">PreventSecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommitsInput">RejectNonDcoCommitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommitsInput">RejectUnsignedCommitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegex">BranchNameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegex">FileNameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheck">MemberCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecrets">PreventSecrets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommits">RejectNonDcoCommits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AuthorEmailRegexInput`<sup>Optional</sup> <a name="AuthorEmailRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegexInput"></a>

```go
func AuthorEmailRegexInput() *string
```

- *Type:* *string

---

##### `BranchNameRegexInput`<sup>Optional</sup> <a name="BranchNameRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegexInput"></a>

```go
func BranchNameRegexInput() *string
```

- *Type:* *string

---

##### `CommitCommitterCheckInput`<sup>Optional</sup> <a name="CommitCommitterCheckInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheckInput"></a>

```go
func CommitCommitterCheckInput() interface{}
```

- *Type:* interface{}

---

##### `CommitCommitterNameCheckInput`<sup>Optional</sup> <a name="CommitCommitterNameCheckInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheckInput"></a>

```go
func CommitCommitterNameCheckInput() interface{}
```

- *Type:* interface{}

---

##### `CommitMessageNegativeRegexInput`<sup>Optional</sup> <a name="CommitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegexInput"></a>

```go
func CommitMessageNegativeRegexInput() *string
```

- *Type:* *string

---

##### `CommitMessageRegexInput`<sup>Optional</sup> <a name="CommitMessageRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegexInput"></a>

```go
func CommitMessageRegexInput() *string
```

- *Type:* *string

---

##### `DenyDeleteTagInput`<sup>Optional</sup> <a name="DenyDeleteTagInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTagInput"></a>

```go
func DenyDeleteTagInput() interface{}
```

- *Type:* interface{}

---

##### `FileNameRegexInput`<sup>Optional</sup> <a name="FileNameRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegexInput"></a>

```go
func FileNameRegexInput() *string
```

- *Type:* *string

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `MemberCheckInput`<sup>Optional</sup> <a name="MemberCheckInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheckInput"></a>

```go
func MemberCheckInput() interface{}
```

- *Type:* interface{}

---

##### `PreventSecretsInput`<sup>Optional</sup> <a name="PreventSecretsInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecretsInput"></a>

```go
func PreventSecretsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RejectNonDcoCommitsInput`<sup>Optional</sup> <a name="RejectNonDcoCommitsInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommitsInput"></a>

```go
func RejectNonDcoCommitsInput() interface{}
```

- *Type:* interface{}

---

##### `RejectUnsignedCommitsInput`<sup>Optional</sup> <a name="RejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommitsInput"></a>

```go
func RejectUnsignedCommitsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorEmailRegex`<sup>Required</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegex"></a>

```go
func AuthorEmailRegex() *string
```

- *Type:* *string

---

##### `BranchNameRegex`<sup>Required</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegex"></a>

```go
func BranchNameRegex() *string
```

- *Type:* *string

---

##### `CommitCommitterCheck`<sup>Required</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheck"></a>

```go
func CommitCommitterCheck() interface{}
```

- *Type:* interface{}

---

##### `CommitCommitterNameCheck`<sup>Required</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheck"></a>

```go
func CommitCommitterNameCheck() interface{}
```

- *Type:* interface{}

---

##### `CommitMessageNegativeRegex`<sup>Required</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegex"></a>

```go
func CommitMessageNegativeRegex() *string
```

- *Type:* *string

---

##### `CommitMessageRegex`<sup>Required</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegex"></a>

```go
func CommitMessageRegex() *string
```

- *Type:* *string

---

##### `DenyDeleteTag`<sup>Required</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTag"></a>

```go
func DenyDeleteTag() interface{}
```

- *Type:* interface{}

---

##### `FileNameRegex`<sup>Required</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegex"></a>

```go
func FileNameRegex() *string
```

- *Type:* *string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `MemberCheck`<sup>Required</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheck"></a>

```go
func MemberCheck() interface{}
```

- *Type:* interface{}

---

##### `PreventSecrets`<sup>Required</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecrets"></a>

```go
func PreventSecrets() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RejectNonDcoCommits`<sup>Required</sup> <a name="RejectNonDcoCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommits"></a>

```go
func RejectNonDcoCommits() interface{}
```

- *Type:* interface{}

---

##### `RejectUnsignedCommits`<sup>Required</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommits"></a>

```go
func RejectUnsignedCommits() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectPushRulesAConfig <a name="ProjectPushRulesAConfig" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectpushrules"

&projectpushrules.ProjectPushRulesAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	AuthorEmailRegex: *string,
	BranchNameRegex: *string,
	CommitCommitterCheck: interface{},
	CommitCommitterNameCheck: interface{},
	CommitMessageNegativeRegex: *string,
	CommitMessageRegex: *string,
	DenyDeleteTag: interface{},
	FileNameRegex: *string,
	MaxFileSize: *f64,
	MemberCheck: interface{},
	PreventSecrets: interface{},
	RejectNonDcoCommits: interface{},
	RejectUnsignedCommits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.project">Project</a></code> | <code>*string</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>*string</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.branchNameRegex">BranchNameRegex</a></code> | <code>*string</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>interface{}</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>interface{}</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>*string</code> | No commit message is allowed to match this regex, e.g. `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>*string</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>interface{}</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.fileNameRegex">FileNameRegex</a></code> | <code>*string</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.memberCheck">MemberCheck</a></code> | <code>interface{}</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.preventSecrets">PreventSecrets</a></code> | <code>interface{}</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectNonDcoCommits">RejectNonDcoCommits</a></code> | <code>interface{}</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>interface{}</code> | Reject commit when it’s not signed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#project ProjectPushRulesA#project}

---

##### `AuthorEmailRegex`<sup>Optional</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.authorEmailRegex"></a>

```go
AuthorEmailRegex *string
```

- *Type:* *string

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#author_email_regex ProjectPushRulesA#author_email_regex}

---

##### `BranchNameRegex`<sup>Optional</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.branchNameRegex"></a>

```go
BranchNameRegex *string
```

- *Type:* *string

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#branch_name_regex ProjectPushRulesA#branch_name_regex}

---

##### `CommitCommitterCheck`<sup>Optional</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterCheck"></a>

```go
CommitCommitterCheck interface{}
```

- *Type:* interface{}

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#commit_committer_check ProjectPushRulesA#commit_committer_check}

---

##### `CommitCommitterNameCheck`<sup>Optional</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterNameCheck"></a>

```go
CommitCommitterNameCheck interface{}
```

- *Type:* interface{}

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#commit_committer_name_check ProjectPushRulesA#commit_committer_name_check}

---

##### `CommitMessageNegativeRegex`<sup>Optional</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageNegativeRegex"></a>

```go
CommitMessageNegativeRegex *string
```

- *Type:* *string

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#commit_message_negative_regex ProjectPushRulesA#commit_message_negative_regex}

---

##### `CommitMessageRegex`<sup>Optional</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageRegex"></a>

```go
CommitMessageRegex *string
```

- *Type:* *string

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#commit_message_regex ProjectPushRulesA#commit_message_regex}

---

##### `DenyDeleteTag`<sup>Optional</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.denyDeleteTag"></a>

```go
DenyDeleteTag interface{}
```

- *Type:* interface{}

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#deny_delete_tag ProjectPushRulesA#deny_delete_tag}

---

##### `FileNameRegex`<sup>Optional</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.fileNameRegex"></a>

```go
FileNameRegex *string
```

- *Type:* *string

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#file_name_regex ProjectPushRulesA#file_name_regex}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#max_file_size ProjectPushRulesA#max_file_size}

---

##### `MemberCheck`<sup>Optional</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.memberCheck"></a>

```go
MemberCheck interface{}
```

- *Type:* interface{}

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#member_check ProjectPushRulesA#member_check}

---

##### `PreventSecrets`<sup>Optional</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.preventSecrets"></a>

```go
PreventSecrets interface{}
```

- *Type:* interface{}

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#prevent_secrets ProjectPushRulesA#prevent_secrets}

---

##### `RejectNonDcoCommits`<sup>Optional</sup> <a name="RejectNonDcoCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectNonDcoCommits"></a>

```go
RejectNonDcoCommits interface{}
```

- *Type:* interface{}

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#reject_non_dco_commits ProjectPushRulesA#reject_non_dco_commits}

---

##### `RejectUnsignedCommits`<sup>Optional</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectUnsignedCommits"></a>

```go
RejectUnsignedCommits interface{}
```

- *Type:* interface{}

Reject commit when it’s not signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_push_rules#reject_unsigned_commits ProjectPushRulesA#reject_unsigned_commits}

---



